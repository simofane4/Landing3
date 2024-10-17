import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';

@Component({
  selector: 'app-get-registrars',
  templateUrl: './get-registrars.component.html',
  styleUrls: ['./get-registrars.component.scss']
})
export class GetRegistrarsComponent implements OnInit {
  registrars: string[] = []; // Holds the list of registrars
  loading: boolean = false; // Indicates loading state
  errorMessage: string = ''; // Error message

  constructor(private domainsService: DomainsService) {}

  ngOnInit(): void {
    this.fetchRegistrars(); // Fetch registrars on component initialization
  }

  // Fetch the list of registrars
  fetchRegistrars(): void {
    this.loading = true;
    this.errorMessage = '';

    this.domainsService.getRegistrars().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.registrars = response.registrars || [];
        } else {
          this.errorMessage = 'Failed to fetch registrars: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching registrars:', error);
        this.errorMessage = 'An error occurred while fetching registrars.';
        this.loading = false;
      }
    );
  }
}
