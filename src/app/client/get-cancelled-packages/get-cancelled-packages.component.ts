import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-cancelled-packages',
  templateUrl: './get-cancelled-packages.component.html',
  styleUrls: ['./get-cancelled-packages.component.scss']
})
export class GetCancelledPackagesComponent implements OnInit {
  loading: boolean = false; // Loading indicator
  cancelledPackages: any[] = []; // Holds the list of cancelled packages
  errorMessage: string = ''; // Error message

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchCancelledPackages();
  }

  // Fetch all cancelled packages using the ClientService
  fetchCancelledPackages(): void {
    this.loading = true;
    this.errorMessage = '';
    this.cancelledPackages = [];

    this.clientService.getCancelledPackages().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.cancelledPackages = response.cancelledpackages || [];
        } else {
          this.errorMessage = 'Failed to retrieve cancelled packages: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching cancelled packages:', error);
        this.errorMessage = 'An error occurred while retrieving cancelled packages.';
        this.loading = false;
      }
    );
  }
}
