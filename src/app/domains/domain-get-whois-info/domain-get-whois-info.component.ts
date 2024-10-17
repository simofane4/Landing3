import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';

@Component({
  selector: 'app-domain-get-whois-info',
  templateUrl: './domain-get-whois-info.component.html',
  styleUrls: ['./domain-get-whois-info.component.scss']
})
export class DomainGetWhoisInfoComponent implements OnInit {
  domainName: string = ''; // Holds the input domain name
  whoisInfo: any = null; // Stores the WHOIS information
  loading: boolean = false; // Indicates loading state
  errorMessage: string = ''; // Stores error messages

  constructor(private domainsService: DomainsService) {}

  ngOnInit(): void {}

  // Fetch the WHOIS information for the entered domain
  getWhoisInfo(): void {
    if (!this.domainName) {
      this.errorMessage = 'Please enter a valid domain name.';
      return;
    }

    this.loading = true;
    this.whoisInfo = null;
    this.errorMessage = '';

    this.domainsService.getWhoisInfo(this.domainName).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.whoisInfo = response.whois; // Assuming WHOIS data is in the 'whois' field
        } else {
          this.errorMessage = 'WHOIS information not found.';
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching WHOIS info:', error);
        this.errorMessage = 'An error occurred while fetching the WHOIS information.';
        this.loading = false;
      }
    );
  }
}
