import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-domain-release',
  templateUrl: './domain-release.component.html',
  styleUrls: ['./domain-release.component.scss']
})
export class DomainReleaseComponent implements OnInit {
  releaseForm: FormGroup; // Form to hold domain and new tag input
  loading: boolean = false; // Indicates loading state
  successMessage: string = ''; // Stores success messages
  errorMessage: string = ''; // Stores error messages
  jsonResponse:any;

  constructor(
    private domainsService: DomainsService,
    private fb: FormBuilder
  ) {
    // Initialize the form
    this.releaseForm = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+$')]],
      newTag: ['', Validators.required] // New registrar tag
    });
  }

  ngOnInit(): void {}

  // Submit the form to release the domain
  onSubmit(): void {
    if (this.releaseForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = this.releaseForm.value;

    this.domainsService.releaseDomain(formData.domain, formData.newTag).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Domain released successfully!';
          this.jsonResponse = response;
        } else {
          this.errorMessage = 'Failed to release the domain: ' + response.message;
          this.jsonResponse = response;
        }
        this.loading = false;
        this.releaseForm.reset();
      },
      (error) => {
        console.error('Error releasing domain:', error);
        this.errorMessage = 'An error occurred during the domain release process.';
        this.loading = false;
      }
    );
  }
}
