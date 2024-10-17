import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-update-quote',
  templateUrl: './update-quote.component.html',
  styleUrls: ['./update-quote.component.scss']
})
export class UpdateQuoteComponent implements OnInit {
  updateQuoteForm: FormGroup; // Form to update quote
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with required fields
    this.updateQuoteForm = this.fb.group({
      quoteId: ['', Validators.required], // Quote ID
      subject: ['', Validators.required], // Subject of the quote
      validUntil: ['', Validators.required], // Validity date
      stage: ['', Validators.required], // Stage of the quote
      notes: [''] // Optional notes
    });
  }

  ngOnInit(): void {}

  // Submit form to update the quote
  onSubmit(): void {
    if (this.updateQuoteForm.invalid) {
      this.errorMessage = 'Please provide valid data.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const quoteData = this.updateQuoteForm.value;

    this.billingService.updateQuote(quoteData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Quote updated successfully!';
          this.updateQuoteForm.reset();
        } else {
          this.errorMessage = 'Failed to update quote: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating quote:', error);
        this.errorMessage = 'An error occurred while updating the quote.';
        this.loading = false;
      }
    );
  }
}
