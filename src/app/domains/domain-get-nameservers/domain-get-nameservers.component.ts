import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';

@Component({
  selector: 'app-domain-get-nameservers',
  templateUrl: './domain-get-nameservers.component.html',
  styleUrls: ['./domain-get-nameservers.component.scss']
})
export class DomainGetNameserversComponent implements OnInit {
  domainName: string = ''; // Holds the input domain name
  nameservers: string[] | null = null; // Stores the nameservers
  loading: boolean = false; // Indicates loading state
  errorMessage: string = ''; // Stores error messages
  jsonResponse:any;
  constructor(private domainsService: DomainsService) {}

  ngOnInit(): void {}


  // Fetch the nameservers for the entered domain
  getNameservers(): void {
    if (!this.domainName) {
      this.errorMessage = 'Please enter a valid domain name.';
      return;
    }

    this.loading = true;
    this.nameservers = null;
    this.errorMessage = '';

    this.domainsService.getNameservers(this.domainName).subscribe(
      (response) => {
        if (response.result === 'success' && response.nameservers) {
          this.nameservers = [
            response.nameservers.ns1,
            response.nameservers.ns2,
            response.nameservers.ns3,
            response.nameservers.ns4,
            response.nameservers.ns5
          ].filter(ns => ns); // Filter out any null or undefined values
          this.jsonResponse = response;
        } else {
          this.errorMessage = 'Nameservers not found for the domain.';
          this.jsonResponse = response;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching nameservers:', error);
        this.errorMessage = 'An error occurred while fetching the nameservers.';
        this.loading = false;
      }
    );
  }
}
