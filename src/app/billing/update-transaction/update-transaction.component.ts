import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.scss']
})
export class UpdateTransactionComponent implements OnInit {
  updateTransactionForm: FormGroup; // Form for updating a transaction
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with required fields
    this.updateTransactionForm = this.fb.group({
      transactionId: ['', Validators.required], // Transaction ID
      amountIn: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]], // Amount In
      amountOut: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]], // Amount Out
      description: ['', Validators.required], // Description
      date: ['', Validators.required] // Transaction Date
    });
  }

  ngOnInit(): void {}

  // Submit form to update the transaction
  onSubmit(): void {
    if (this.updateTransactionForm.invalid) {
      this.errorMessage = 'Please provide valid data.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const transactionData = this.updateTransactionForm.value;

    this.billingService.updateTransaction(transactionData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Transaction updated successfully!';
          this.updateTransactionForm.reset();
        } else {
          this.errorMessage = 'Failed to update transaction: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating transaction:', error);
        this.errorMessage = 'An error occurred while updating the transaction.';
        this.loading = false;
      }
    );
  }
}
