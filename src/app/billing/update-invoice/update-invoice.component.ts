import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.scss']
})
export class UpdateInvoiceComponent implements OnInit {
  updateInvoiceForm: FormGroup; // Form for updating invoice
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize form with required fields
    this.updateInvoiceForm = this.fb.group({
      invoiceId: ['', Validators.required], // Invoice ID
      status: ['', Validators.required], // Invoice status
      paymentMethod: ['', Validators.required], // Payment method
      notes: [''] // Optional notes
    });
  }

  ngOnInit(): void {}

  // Submit form to update the invoice
  onSubmit(): void {
    if (this.updateInvoiceForm.invalid) {
      this.errorMessage = 'Please provide valid data.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const invoiceData = this.updateInvoiceForm.value;

    this.billingService.updateInvoice(invoiceData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Invoice updated successfully!';
          this.updateInvoiceForm.reset();
        } else {
          this.errorMessage = 'Failed to update invoice: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating invoice:', error);
        this.errorMessage = 'An error occurred while updating the invoice.';
        this.loading = false;
      }
    );
  }
}
