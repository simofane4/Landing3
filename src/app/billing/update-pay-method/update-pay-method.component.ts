import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-update-pay-method',
  templateUrl: './update-pay-method.component.html',
  styleUrls: ['./update-pay-method.component.scss']
})
export class UpdatePayMethodComponent implements OnInit {
  updatePayMethodForm: FormGroup; // Form for updating pay method
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize form with required fields
    this.updatePayMethodForm = this.fb.group({
      payMethodId: ['', Validators.required], // Payment Method ID
      type: ['', Validators.required], // Payment type (e.g., "creditcard", "bankaccount")
      description: ['', Validators.required], // Description of the payment method
      active: [true, Validators.required] // Active status
    });
  }

  ngOnInit(): void {}

  // Submit form to update the payment method
  onSubmit(): void {
    if (this.updatePayMethodForm.invalid) {
      this.errorMessage = 'Please provide valid data.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const payMethodData = this.updatePayMethodForm.value;

    this.billingService.updatePayMethod(payMethodData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Payment method updated successfully!';
          this.updatePayMethodForm.reset();
        } else {
          this.errorMessage = 'Failed to update payment method: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating payment method:', error);
        this.errorMessage = 'An error occurred while updating the payment method.';
        this.loading = false;
      }
    );
  }
}
