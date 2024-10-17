import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-get-transactions',
  templateUrl: './get-transactions.component.html',
  styleUrls: ['./get-transactions.component.scss']
})
export class GetTransactionsComponent implements OnInit {
  loading: boolean = false; // Loading indicator
  transactions: any[] = []; // Holds transactions data
  errorMessage: string = ''; // Error message

  constructor(private billingService: BillingService) {}

  ngOnInit(): void {
    this.fetchTransactions(); // Automatically fetch transactions on load
  }

  // Fetch all transactions using the BillingService
  fetchTransactions(): void {
    this.loading = true;
    this.errorMessage = '';
    this.transactions = [];

    this.billingService.getTransactions().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.transactions = response.transactions || [];
        } else {
          this.errorMessage = 'Failed to retrieve transactions: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching transactions:', error);
        this.errorMessage = 'An error occurred while retrieving transactions.';
        this.loading = false;
      }
    );
  }
}
