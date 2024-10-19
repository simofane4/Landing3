import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';

@Component({
  selector: 'app-get-tld-pricing',
  templateUrl: './get-tld-pricing.component.html',
  styleUrls: ['./get-tld-pricing.component.scss']
})
export class GetTldPricingComponent implements OnInit {
  tldPricing: any[] = []; // Holds the TLD pricing data
  loading: boolean = false; // Loading state indicator
  errorMessage: string = ''; // Error message
  jsonResponse:any[] = [];
  constructor(private domainsService: DomainsService) {}

  ngOnInit(): void {
    this.fetchTldPricing(); // Fetch TLD pricing on component initialization
  }

  // Fetch TLD pricing from the API
  fetchTldPricing(): void {
    this.loading = true;
    this.errorMessage = '';

    this.domainsService.getTldPricing().subscribe(
      (response) => {
        this.jsonResponse = response;
        if (response.result === 'success' && response.tldpricing) {
          this.tldPricing = response.tldpricing;
          
        } else {
          this.errorMessage = 'Failed to retrieve TLD pricing: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching TLD pricing:', error);
        this.errorMessage = 'An error occurred while retrieving TLD pricing.';
        this.loading = false;
      }
    );
  }
}
