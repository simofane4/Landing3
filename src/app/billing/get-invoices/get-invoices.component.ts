import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-get-invoices',
  templateUrl: './get-invoices.component.html',
  styleUrls: ['./get-invoices.component.scss']
})
export class GetInvoicesComponent implements OnInit {
  loading: boolean = false; // Loading indicator
  invoices: any[] = []; // Holds invoices data
  errorMessage: string = ''; // Error message

  constructor(private billingService: BillingService) {}

  ngOnInit(): void {
    this.fetchInvoices(); // Automatically fetch invoices on load
  }

  // Fetch all invoices using the BillingService
  fetchInvoices(): void {
    this.loading = true;
    this.errorMessage = '';
    this.invoices = [];

    this.billingService.getInvoices().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.invoices = response.invoices || [];
        } else {
          this.errorMessage = 'Failed to retrieve invoices: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching invoices:', error);
        this.errorMessage = 'An error occurred while retrieving invoices.';
        this.loading = false;
      }
    );
  }
}
