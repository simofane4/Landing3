import { Component } from '@angular/core';
import { DomainsService } from 'src/app/domains/domains.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  domainName: string = '';
  suggestions: any[] = [];
  selectedDomain: string = '';  // To store the selected domain

  constructor(private domainsService: DomainsService) {}

  // Method to search domain and get suggestions
  onSearchDomain() {
    if (this.domainName.length > 2) {
      this.domainsService.getWhoisInfo(this.domainName).subscribe((whoisResponse: any) => {
        console.log('WHOIS Response:', whoisResponse);

        this.suggestions = [];

        if (whoisResponse.result !== 'error') {
          const domainStatus = whoisResponse.domainstatus === 'available' ? 'Available' : 'Taken';

          if (domainStatus === 'Available') {
            this.suggestions.push({
              domain: this.domainName,
              status: domainStatus
            });
          } else {
            this.suggestions.push({
              domain: this.domainName,
              status: 'Taken',
              message: `${this.domainName} n'est pas disponible`
            });
          }

          // Fetch TLD pricing and generate suggestions
          this.domainsService.getTldPricing().subscribe((pricingResponse: any) => {
            const tldPricing = pricingResponse.pricing;
            const currencySuffix = pricingResponse.currency.suffix || 'DH';

            Object.keys(tldPricing).forEach((tld: string) => {
              const baseDomain = this.domainName.split('.')[0];
              const suggestion = `${baseDomain}.${tld}`;
              const registerPrice = tldPricing[tld]?.register?.['1'];

              if (registerPrice) {
                this.suggestions.push({
                  domain: suggestion,
                  price: `${registerPrice} ${currencySuffix}`
                });
              }
            });
          });
        }
      });
    } else {
      alert('Veuillez entrer un nom de domaine valide.');
    }
  }

  // Method to handle domain selection
  onSelectDomain(domain: string) {
    this.selectedDomain = domain;  // Store the selected domain
    console.log('Selected Domain:', domain);

    // You can add logic here to navigate to another page,
    // add the domain to a cart, or start the registration process.
  }
}
