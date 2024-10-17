import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {
  createQuoteForm: FormGroup; // Form to create a quote
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize form with required fields
    this.createQuoteForm = this.fb.group({
      clientId: ['', Validators.required], // Client ID
      subject: ['', Validators.required], // Quote subject
      dateCreated: ['', Validators.required], // Date created
      validUntil: ['', Validators.required], // Valid until date
      items: this.fb.array([this.createItem()]) // Array of items
    });
  }

  ngOnInit(): void {}

  // Helper to create a new item group
  createItem(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required], // Item description
      quantity: ['', [Validators.required, Validators.min(1)]], // Quantity
      unitPrice: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]] // Unit price
    });
  }

  // Add a new item to the items array
  addItem(): void {
    this.items.push(this.createItem());
  }

  // Remove an item from the items array
  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  // Getter for the items array
  get items(): FormArray {
    return this.createQuoteForm.get('items') as FormArray;
  }

  // Submit form to create the quote
  onSubmit(): void {
    if (this.createQuoteForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const quoteData = this.createQuoteForm.value;

    this.billingService.createQuote(quoteData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Quote created successfully!';
          this.createQuoteForm.reset();
        } else {
          this.errorMessage = 'Failed to create quote: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error creating quote:', error);
        this.errorMessage = 'An error occurred while creating the quote.';
        this.loading = false;
      }
    );
  }
}
