import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-client-domain',
  templateUrl: './update-client-domain.component.html',
  styleUrls: ['./update-client-domain.component.scss']
})
export class UpdateClientDomainComponent implements OnInit {
  updateForm: FormGroup; // Form to update client domain information
  loading: boolean = false; // Loading state indicator
  successMessage: string = ''; // Stores success message
  errorMessage: string = ''; // Stores error message

  constructor(
    private domainsService: DomainsService,
    private fb: FormBuilder
  ) {
    // Initialize the form
    this.updateForm = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+$')]],
      clientid: ['', Validators.required], // Client ID
      regperiod: [1, [Validators.required, Validators.min(1)]], // Registration period in years
      status: ['', Validators.required], // Domain status (active, pending, etc.)
    });
  }

  ngOnInit(): void {}

  // Submit the form to update client domain information
  onSubmit(): void {
    if (this.updateForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const updateData = this.updateForm.value;

    this.domainsService.updateClientDomain(updateData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Client domain updated successfully!';
        } else {
          this.errorMessage = 'Failed to update client domain: ' + response.message;
        }
        this.loading = false;
        this.updateForm.reset();
      },
      (error) => {
        console.error('Error updating client domain:', error);
        this.errorMessage = 'An error occurred during the update.';
        this.loading = false;
      }
    );
  }
}
