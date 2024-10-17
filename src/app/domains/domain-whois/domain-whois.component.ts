import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';

@Component({
  selector: 'app-domain-whois',
  templateUrl: './domain-whois.component.html',
  styleUrls: ['./domain-whois.component.scss']
})
export class DomainWhoisComponent implements OnInit {
  domainName: string = '';
  listofdomaine:any[]=['fr','com','org']; // Holds the input domain name
  whoisInfo: any = null; // Stores WHOIS information
  loading: boolean = false; // Indicates loading state
  errorMessage: string = ''; // Stores error message
  jsonResponse:any;
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
          this.whoisInfo = response.whois; // Assuming WHOIS info is under 'whois' property
          this.jsonResponse = response;
        } else {
          this.errorMessage = 'WHOIS information not found.';
          this.jsonResponse = response;
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
