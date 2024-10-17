import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-capture-payment',
  templateUrl: './capture-payment.component.html',
  styleUrls: ['./capture-payment.component.scss']
})
export class CapturePaymentComponent implements OnInit {
  capturePaymentForm: FormGroup; // Form to capture payment
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with necessary fields
    this.capturePaymentForm = this.fb.group({
      invoiceId: ['', Validators.required] // Invoice ID is required
    });
  }

  ngOnInit(): void {}

  // Submit the form to capture payment
  onSubmit(): void {
    if (this.capturePaymentForm.invalid) {
      this.errorMessage = 'Please provide a valid Invoice ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { invoiceId } = this.capturePaymentForm.value;

    this.billingService.capturePayment(invoiceId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Payment captured successfully!';
          this.capturePaymentForm.reset();
        } else {
          this.errorMessage = 'Failed to capture payment: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error capturing payment:', error);
        this.errorMessage = 'An error occurred while capturing the payment.';
        this.loading = false;
      }
    );
  }
}
