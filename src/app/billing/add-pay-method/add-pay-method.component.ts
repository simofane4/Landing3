import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-add-pay-method',
  templateUrl: './add-pay-method.component.html',
  styleUrls: ['./add-pay-method.component.scss']
})
export class AddPayMethodComponent implements OnInit {
  addPayMethodForm: FormGroup; // Form to add pay method
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with necessary fields
    this.addPayMethodForm = this.fb.group({
      clientId: ['', Validators.required], // Client ID is required
      type: ['', Validators.required], // Payment method type is required
      description: ['', Validators.required], // Description is required
      creditCardToken: [''], // Optional: Token if using a credit card
      bankAccountToken: [''] // Optional: Token if using a bank account
    });
  }

  ngOnInit(): void {}

  // Submit the form to add a payment method
  onSubmit(): void {
    if (this.addPayMethodForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const payMethodData = this.addPayMethodForm.value;

    this.billingService.addPayMethod(payMethodData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Payment method added successfully!';
          this.addPayMethodForm.reset();
        } else {
          this.errorMessage = 'Failed to add payment method: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding payment method:', error);
        this.errorMessage = 'An error occurred while adding the payment method.';
        this.loading = false;
      }
    );
  }
}
