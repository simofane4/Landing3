import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-add-invoice-payment',
  templateUrl: './add-invoice-payment.component.html',
  styleUrls: ['./add-invoice-payment.component.scss']
})
export class AddInvoicePaymentComponent implements OnInit {
  addInvoicePaymentForm: FormGroup; // Form to add invoice payment
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with necessary fields
    this.addInvoicePaymentForm = this.fb.group({
      invoiceId: ['', Validators.required], // Invoice ID is required
      transactionId: ['', Validators.required], // Transaction ID is required
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]], // Amount with validation
      paymentMethod: ['', Validators.required], // Payment method is required
      date: ['', Validators.required] // Payment date is required
    });
  }

  ngOnInit(): void {}

  // Submit form to add payment to invoice
  onSubmit(): void {
    if (this.addInvoicePaymentForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const paymentData = this.addInvoicePaymentForm.value;

    this.billingService.addInvoicePayment(paymentData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Invoice payment added successfully!';
          this.addInvoicePaymentForm.reset();
        } else {
          this.errorMessage = 'Failed to add payment: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding payment:', error);
        this.errorMessage = 'An error occurred while adding the payment.';
        this.loading = false;
      }
    );
  }
}
