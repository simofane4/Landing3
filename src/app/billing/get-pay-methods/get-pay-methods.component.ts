import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-get-pay-methods',
  templateUrl: './get-pay-methods.component.html',
  styleUrls: ['./get-pay-methods.component.scss']
})
export class GetPayMethodsComponent implements OnInit {
  loading: boolean = false; // Loading indicator
  payMethods: any[] = []; // Holds payment methods data
  errorMessage: string = ''; // Error message

  constructor(private billingService: BillingService) {}

  ngOnInit(): void {}

  // Retrieve payment methods for a given client ID
  getPayMethods(clientId: string): void {
    if (!clientId) {
      this.errorMessage = 'Client ID is required.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.payMethods = [];

    this.billingService.getPayMethods(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.payMethods = response.paymethods || [];
        } else {
          this.errorMessage = 'Failed to retrieve payment methods: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching payment methods:', error);
        this.errorMessage = 'An error occurred while retrieving payment methods.';
        this.loading = false;
      }
    );
  }
}
