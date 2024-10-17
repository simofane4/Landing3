import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-domain-toggle-id-protect',
  templateUrl: './domain-toggle-id-protect.component.html',
  styleUrls: ['./domain-toggle-id-protect.component.scss']
})
export class DomainToggleIdProtectComponent implements OnInit {
  toggleForm: FormGroup; // Form to input domain and toggle ID protection
  loading: boolean = false; // Loading state indicator
  successMessage: string = ''; // Stores success message
  errorMessage: string = ''; // Stores error message

  constructor(
    private domainsService: DomainsService,
    private fb: FormBuilder
  ) {
    // Initialize the form with FormBuilder
    this.toggleForm = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+$')]],
      idProtection: [false] // Toggle state of ID protection
    });
  }

  ngOnInit(): void {}

  // Submit the form to toggle ID protection
  onSubmit(): void {
    if (this.toggleForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { domain, idProtection } = this.toggleForm.value;

    this.domainsService.toggleIdProtect(domain, idProtection).subscribe(
      (response) => {
        if (response.result === 'success') {
          const status = idProtection ? 'enabled' : 'disabled';
          this.successMessage = `ID Protection has been ${status} successfully!`;
        } else {
          this.errorMessage = 'Failed to toggle ID Protection: ' + response.message;
        }
        this.loading = false;
        this.toggleForm.reset();
      },
      (error) => {
        console.error('Error toggling ID protection:', error);
        this.errorMessage = 'An error occurred while toggling ID protection.';
        this.loading = false;
      }
    );
  }
}
