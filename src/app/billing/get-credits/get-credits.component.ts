import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-get-credits',
  templateUrl: './get-credits.component.html',
  styleUrls: ['./get-credits.component.scss']
})
export class GetCreditsComponent implements OnInit {
  loading: boolean = false; // Loading indicator
  credits: any[] = []; // Holds client credit data
  errorMessage: string = ''; // Error message

  constructor(private billingService: BillingService) {}

  ngOnInit(): void {}

  // Retrieve credits for a given client ID
  getCredits(clientId: string): void {
    if (!clientId) {
      this.errorMessage = 'Client ID is required.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.credits = [];

    this.billingService.getCredits(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.credits = response.credits || [];
        } else {
          this.errorMessage = 'Failed to retrieve credits: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching credits:', error);
        this.errorMessage = 'An error occurred while retrieving credits.';
        this.loading = false;
      }
    );
  }
}
