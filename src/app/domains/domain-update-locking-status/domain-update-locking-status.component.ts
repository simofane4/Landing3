import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-domain-update-locking-status',
  templateUrl: './domain-update-locking-status.component.html',
  styleUrls: ['./domain-update-locking-status.component.scss']
})
export class DomainUpdateLockingStatusComponent implements OnInit {
  lockingStatusForm: FormGroup; // Form for input domain and locking status
  loading: boolean = false; // Loading state indicator
  successMessage: string = ''; // Stores success message
  errorMessage: string = ''; // Stores error message

  constructor(
    private domainsService: DomainsService,
    private fb: FormBuilder
  ) {
    // Initialize the form
    this.lockingStatusForm = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+$')]],
      lockStatus: [false, Validators.required] // Lock status toggle
    });
  }

  ngOnInit(): void {}

  // Submit the form to update locking status
  onSubmit(): void {
    if (this.lockingStatusForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { domain, lockStatus } = this.lockingStatusForm.value;

    this.domainsService.updateLockingStatus(domain, lockStatus).subscribe(
      (response) => {
        if (response.result === 'success') {
          const status = lockStatus ? 'enabled' : 'disabled';
          this.successMessage = `Registrar lock has been ${status} successfully!`;
        } else {
          this.errorMessage = 'Failed to update locking status: ' + response.message;
        }
        this.loading = false;
        this.lockingStatusForm.reset();
      },
      (error) => {
        console.error('Error updating locking status:', error);
        this.errorMessage = 'An error occurred while updating the locking status.';
        this.loading = false;
      }
    );
  }
}
