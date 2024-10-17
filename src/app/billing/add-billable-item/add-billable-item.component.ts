import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-add-billable-item',
  templateUrl: './add-billable-item.component.html',
  styleUrls: ['./add-billable-item.component.scss']
})
export class AddBillableItemComponent implements OnInit {
  addBillableItemForm: FormGroup; // Form for adding billable item
  loading: boolean = false; // Loading state indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with necessary fields
    this.addBillableItemForm = this.fb.group({
      clientId: ['', Validators.required], // Client ID is required
      description: ['', Validators.required], // Description is required
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]], // Amount with validation
      invoiceAction: ['', Validators.required], // Invoice action (e.g., no, nextcron, or due)
      recur: ['0'], // Optional recurring interval (in days)
    });
  }

  ngOnInit(): void {}

  // Submit form to add a billable item
  onSubmit(): void {
    if (this.addBillableItemForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const billableItemData = this.addBillableItemForm.value;

    this.billingService.addBillableItem(billableItemData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Billable item added successfully!';
          this.addBillableItemForm.reset();
        } else {
          this.errorMessage = 'Failed to add billable item: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding billable item:', error);
        this.errorMessage = 'An error occurred while adding the billable item.';
        this.loading = false;
      }
    );
  }
}
