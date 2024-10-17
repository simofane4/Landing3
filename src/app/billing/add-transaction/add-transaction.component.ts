import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {
  addTransactionForm: FormGroup; // Form to add transaction
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with required fields
    this.addTransactionForm = this.fb.group({
      clientId: ['', Validators.required], // Client ID is required
      amountIn: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]], // Amount in with validation
      paymentMethod: ['', Validators.required], // Payment method is required
      date: ['', Validators.required], // Transaction date
      description: ['', Validators.required], // Description is required
      invoiceId: [''] // Optional Invoice ID
    });
  }

  ngOnInit(): void {}

  // Submit form to add a transaction
  onSubmit(): void {
    if (this.addTransactionForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const transactionData = this.addTransactionForm.value;

    this.billingService.addTransaction(transactionData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Transaction added successfully!';
          this.addTransactionForm.reset();
        } else {
          this.errorMessage = 'Failed to add transaction: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding transaction:', error);
        this.errorMessage = 'An error occurred while adding the transaction.';
        this.loading = false;
      }
    );
  }
}
