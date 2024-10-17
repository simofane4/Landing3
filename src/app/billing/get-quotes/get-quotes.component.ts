import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-get-quotes',
  templateUrl: './get-quotes.component.html',
  styleUrls: ['./get-quotes.component.scss']
})
export class GetQuotesComponent implements OnInit {
  loading: boolean = false; // Loading indicator
  quotes: any[] = []; // Holds quotes data
  errorMessage: string = ''; // Error message

  constructor(private billingService: BillingService) {}

  ngOnInit(): void {
    this.fetchQuotes(); // Automatically fetch quotes on load
  }

  // Fetch all quotes using the BillingService
  fetchQuotes(): void {
    this.loading = true;
    this.errorMessage = '';
    this.quotes = [];

    this.billingService.getQuotes().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.quotes = response.quotes || [];
        } else {
          this.errorMessage = 'Failed to retrieve quotes: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching quotes:', error);
        this.errorMessage = 'An error occurred while retrieving quotes.';
        this.loading = false;
      }
    );
  }
}
