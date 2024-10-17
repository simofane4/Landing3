import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.component.html',
  styleUrls: ['./add-credit.component.scss']
})
export class AddCreditComponent implements OnInit {
  addCreditForm: FormGroup; // Form to add credit
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with necessary fields
    this.addCreditForm = this.fb.group({
      clientId: ['', Validators.required], // Client ID is required
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]], // Amount with validation
      description: ['', Validators.required] // Description is required
    });
  }

  ngOnInit(): void {}

  // Submit form to add credit
  onSubmit(): void {
    if (this.addCreditForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const creditData = this.addCreditForm.value;

    this.billingService.addCredit(creditData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Credit added successfully!';
          this.addCreditForm.reset();
        } else {
          this.errorMessage = 'Failed to add credit: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding credit:', error);
        this.errorMessage = 'An error occurred while adding the credit.';
        this.loading = false;
      }
    );
  }
}
