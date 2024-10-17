import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-accept-quote',
  templateUrl: './accept-quote.component.html',
  styleUrls: ['./accept-quote.component.scss']
})
export class AcceptQuoteComponent implements OnInit {
  acceptQuoteForm: FormGroup; // Form for accepting a quote
  loading: boolean = false; // Loading state
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with quoteId input field
    this.acceptQuoteForm = this.fb.group({
      quoteId: ['', Validators.required] // Quote ID is required
    });
  }

  ngOnInit(): void {}

  // Submit the form to accept the quote
  onSubmit(): void {
    if (this.acceptQuoteForm.invalid) {
      this.errorMessage = 'Please provide a valid Quote ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { quoteId } = this.acceptQuoteForm.value;

    this.billingService.acceptQuote(quoteId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Quote accepted successfully!';
          this.acceptQuoteForm.reset();
        } else {
          this.errorMessage = 'Failed to accept quote: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error accepting quote:', error);
        this.errorMessage = 'An error occurred while accepting the quote.';
        this.loading = false;
      }
    );
  }
}
