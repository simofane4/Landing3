import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-domain-renew',
  templateUrl: './domain-renew.component.html',
  styleUrls: ['./domain-renew.component.scss']
})
export class DomainRenewComponent implements OnInit {
  renewForm: FormGroup; // Form for domain renewal
  loading: boolean = false; // Loading state indicator
  successMessage: string = ''; // Stores success message
  errorMessage: string = ''; // Stores error message

  constructor(
    private domainsService: DomainsService,
    private fb: FormBuilder
  ) {
    // Initialize the form with FormBuilder
    this.renewForm = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+$')]],
      regperiod: [1, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  // Submit form to renew the domain
  onSubmit(): void {
    if (this.renewForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = this.renewForm.value;

    this.domainsService.renewDomain(formData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Domain renewed successfully!';
        } else {
          this.errorMessage = 'Failed to renew domain: ' + response.message;
        }
        this.loading = false;
        this.renewForm.reset();
      },
      (error) => {
        console.error('Error renewing domain:', error);
        this.errorMessage = 'An error occurred during the renewal process.';
        this.loading = false;
      }
    );
  }
}
