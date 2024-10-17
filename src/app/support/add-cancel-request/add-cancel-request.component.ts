import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-add-cancel-request',
  templateUrl: './add-cancel-request.component.html',
  styleUrls: ['./add-cancel-request.component.scss']
})
export class AddCancelRequestComponent {
  addCancelRequestForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.addCancelRequestForm = this.fb.group({
      serviceid: ['', Validators.required],
      type: ['', Validators.required], // Type of cancellation: 'Immediate' or 'End of Billing Period'
      reason: [''], // Optional reason for cancellation
    });
  }

  // Submit the form to add a cancel request
  onSubmit(): void {
    if (this.addCancelRequestForm.invalid) {
      this.errorMessage = 'Please provide all required fields.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const cancelRequestData = this.addCancelRequestForm.value;

    this.supportService.addCancelRequest(cancelRequestData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Cancel request added successfully!';
          this.addCancelRequestForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to add cancel request: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding cancel request:', error);
        this.errorMessage = 'An error occurred while adding the cancel request.';
        this.loading = false;
      }
    );
  }
}
