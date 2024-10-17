import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-get-invoice',
  templateUrl: './get-invoice.component.html',
  styleUrls: ['./get-invoice.component.scss']
})
export class GetInvoiceComponent implements OnInit {
  loading: boolean = false; // Loading indicator
  invoice: any = null; // Holds invoice data
  errorMessage: string = ''; // Error message

  constructor(private billingService: BillingService) {}

  ngOnInit(): void {}

  // Retrieve invoice by invoice ID
  getInvoice(invoiceId: string): void {
    if (!invoiceId) {
      this.errorMessage = 'Invoice ID is required.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.invoice = null;

    this.billingService.getInvoice(invoiceId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.invoice = response.invoice;
        } else {
          this.errorMessage = 'Failed to retrieve invoice: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching invoice:', error);
        this.errorMessage = 'An error occurred while retrieving the invoice.';
        this.loading = false;
      }
    );
  }
}
