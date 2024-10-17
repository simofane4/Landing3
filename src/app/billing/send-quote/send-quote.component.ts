import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-send-quote',
  templateUrl: './send-quote.component.html',
  styleUrls: ['./send-quote.component.scss']
})
export class SendQuoteComponent implements OnInit {
  sendQuoteForm: FormGroup; // Form to send quote
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize form with required fields
    this.sendQuoteForm = this.fb.group({
      quoteId: ['', Validators.required], // Quote ID
      email: ['', [Validators.required, Validators.email]] // Client email
    });
  }

  ngOnInit(): void {}

  // Submit the form to send the quote
  onSubmit(): void {
    if (this.sendQuoteForm.invalid) {
      this.errorMessage = 'Please provide a valid Quote ID and Email.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { quoteId, email } = this.sendQuoteForm.value;

    this.billingService.sendQuote(quoteId, email).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Quote sent successfully!';
          this.sendQuoteForm.reset();
        } else {
          this.errorMessage = 'Failed to send quote: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error sending quote:', error);
        this.errorMessage = 'An error occurred while sending the quote.';
        this.loading = false;
      }
    );
  }
}
