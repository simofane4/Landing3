import { Component } from '@angular/core';
import { DomainsService } from 'src/app/domains/domains.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  domainName: string = '';  // Input domain name
  suggestions: any[] = [];  // List of domain suggestions

  constructor(private domainsService: DomainsService) {}

  onSearchDomain() {
    if (this.domainName.length > 2) {
      // Call WHOIS check for the domain
      this.domainsService.getWhoisInfo(this.domainName).subscribe((whoisResponse: any) => {
        console.log('WHOIS Response:', whoisResponse);  // Debugging log

        // Clear previous suggestions
        this.suggestions = [];

        if (whoisResponse.result !== 'error') {
          const domainStatus = whoisResponse.domainstatus === 'available' ? 'Available' : 'Taken';

          // Add the original domain and its status
          this.suggestions.push({
            domain: this.domainName,
            status: domainStatus
          });

          // Now fetch TLD pricing and generate suggestions
          this.domainsService.getTldPricing().subscribe((pricingResponse: any) => {
            console.log('TLD Pricing Response:', pricingResponse);  // Debugging log

            if (pricingResponse.result === 'success') {
              const tldPricing = pricingResponse.pricing;
              const currencySuffix = pricingResponse.currency.suffix || 'DH';  // Use DH as default

              // Loop through the TLD pricing to generate suggestions
              Object.keys(tldPricing).forEach((tld: string) => {
                if (!this.domainName.endsWith(tld)) {
                  const baseDomain = this.domainName.split('.')[0];  // Get base domain (e.g., 'example' from 'example.com')
                  const suggestion = `${baseDomain}.${tld}`;  // Combine with each TLD

                  const registerPrice = tldPricing[tld]?.register?.['1'];  // Get the 1-year registration price

                  // Add the suggestion to the list if pricing exists
                  if (registerPrice) {
                    this.suggestions.push({
                      domain: suggestion,
                      price: `${registerPrice} ${currencySuffix}`
                    });
                  }
                }
              });

              // Log the final suggestions array
              console.log('Final Suggestions (With Pricing):', this.suggestions);
            }
          }, (error) => {
            console.error('Error fetching TLD pricing:', error);
          });
        }
      }, (error) => {
        console.error('Error fetching WHOIS info:', error);
      });
    } else {
      alert('Please enter a valid domain name.');
    }
  }
}
