import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-delete-quote',
  templateUrl: './delete-quote.component.html',
  styleUrls: ['./delete-quote.component.scss']
})
export class DeleteQuoteComponent implements OnInit {
  deleteQuoteForm: FormGroup; // Form to delete a quote
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with required fields
    this.deleteQuoteForm = this.fb.group({
      quoteId: ['', Validators.required] // Quote ID is required
    });
  }

  ngOnInit(): void {}

  // Submit the form to delete the quote
  onSubmit(): void {
    if (this.deleteQuoteForm.invalid) {
      this.errorMessage = 'Please provide a valid Quote ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { quoteId } = this.deleteQuoteForm.value;

    this.billingService.deleteQuote(quoteId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Quote deleted successfully!';
          this.deleteQuoteForm.reset();
        } else {
          this.errorMessage = 'Failed to delete quote: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error deleting quote:', error);
        this.errorMessage = 'An error occurred while deleting the quote.';
        this.loading = false;
      }
    );
  }
}
