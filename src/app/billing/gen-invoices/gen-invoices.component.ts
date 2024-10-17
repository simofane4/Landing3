import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-gen-invoices',
  templateUrl: './gen-invoices.component.html',
  styleUrls: ['./gen-invoices.component.scss']
})
export class GenInvoicesComponent implements OnInit {
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private billingService: BillingService) {}

  ngOnInit(): void {}

  // Generate invoices using WHMCS API
  onGenerateInvoices(): void {
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.billingService.genInvoices().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Invoices generated successfully!';
        } else {
          this.errorMessage = 'Failed to generate invoices: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error generating invoices:', error);
        this.errorMessage = 'An error occurred while generating invoices.';
        this.loading = false;
      }
    );
  }
}
