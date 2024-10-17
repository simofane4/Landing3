import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {
  createInvoiceForm: FormGroup; // Form to create an invoice
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with fields
    this.createInvoiceForm = this.fb.group({
      clientId: ['', Validators.required], // Client ID
      status: ['Unpaid', Validators.required], // Invoice status
      date: ['', Validators.required], // Invoice date
      duedate: ['', Validators.required], // Due date
      items: this.fb.array([this.createItem()]) // Array of items
    });
  }

  ngOnInit(): void {}

  // Helper to create a new item group
  createItem(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required], // Item description
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]] // Item amount
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
    return this.createInvoiceForm.get('items') as FormArray;
  }

  // Submit the form to create an invoice
  onSubmit(): void {
    if (this.createInvoiceForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const invoiceData = this.createInvoiceForm.value;

    this.billingService.createInvoice(invoiceData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Invoice created successfully!';
          this.createInvoiceForm.reset();
        } else {
          this.errorMessage = 'Failed to create invoice: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error creating invoice:', error);
        this.errorMessage = 'An error occurred while creating the invoice.';
        this.loading = false;
      }
    );
  }
}
