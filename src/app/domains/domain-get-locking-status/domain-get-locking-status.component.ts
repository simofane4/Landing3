import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';

@Component({
  selector: 'app-domain-get-locking-status',
  templateUrl: './domain-get-locking-status.component.html',
  styleUrls: ['./domain-get-locking-status.component.scss']
})
export class DomainGetLockingStatusComponent implements OnInit {
  domainName: string = ''; // Input field for domain name
  lockingStatus: string | null = null; // Stores the locking status result
  loading: boolean = false; // Show loading state
  errorMessage: string = ''; // Store error messages
  jsonResponse:any;
  constructor(private domainsService: DomainsService) {}

  ngOnInit(): void {}

  // Fetch the locking status for the entered domain
  getLockingStatus(): void {
    if (!this.domainName) {
      this.errorMessage = 'Please enter a valid domain name.';
      return;
    }

    this.loading = true;
    this.lockingStatus = null;
    this.errorMessage = '';

    this.domainsService.getDomainLockingStatus(this.domainName).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.lockingStatus = response.lockstatus;
        } else {
          this.jsonResponse = response;
          this.errorMessage = 'Failed to fetch the locking status.';
        }
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching the status.';
        console.error(error);
        this.loading = false;
      }
    );
  }
}
