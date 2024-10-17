import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-delete-pay-method',
  templateUrl: './delete-pay-method.component.html',
  styleUrls: ['./delete-pay-method.component.scss']
})
export class DeletePayMethodComponent implements OnInit {
  deletePayMethodForm: FormGroup; // Form to delete a pay method
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with required fields
    this.deletePayMethodForm = this.fb.group({
      payMethodId: ['', Validators.required] // Pay Method ID is required
    });
  }

  ngOnInit(): void {}

  // Submit the form to delete the payment method
  onSubmit(): void {
    if (this.deletePayMethodForm.invalid) {
      this.errorMessage = 'Please provide a valid Pay Method ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { payMethodId } = this.deletePayMethodForm.value;

    this.billingService.deletePayMethod(payMethodId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Payment method deleted successfully!';
          this.deletePayMethodForm.reset();
        } else {
          this.errorMessage = 'Failed to delete payment method: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error deleting payment method:', error);
        this.errorMessage = 'An error occurred while deleting the payment method.';
        this.loading = false;
      }
    );
  }
}
