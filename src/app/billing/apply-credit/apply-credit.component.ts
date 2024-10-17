import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-apply-credit',
  templateUrl: './apply-credit.component.html',
  styleUrls: ['./apply-credit.component.scss']
})
export class ApplyCreditComponent implements OnInit {
  applyCreditForm: FormGroup; // Form to apply credit
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private billingService: BillingService
  ) {
    // Initialize the form with necessary fields
    this.applyCreditForm = this.fb.group({
      invoiceId: ['', Validators.required], // Invoice ID is required
      clientId: ['', Validators.required], // Client ID is required
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]] // Amount with validation
    });
  }

  ngOnInit(): void {}

  // Submit the form to apply credit
  onSubmit(): void {
    if (this.applyCreditForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const creditData = this.applyCreditForm.value;

    this.billingService.applyCredit(creditData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Credit applied successfully!';
          this.applyCreditForm.reset();
        } else {
          this.errorMessage = 'Failed to apply credit: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error applying credit:', error);
        this.errorMessage = 'An error occurred while applying the credit.';
        this.loading = false;
      }
    );
  }
}
