import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-clients-domains',
  templateUrl: './get-clients-domains.component.html',
  styleUrls: ['./get-clients-domains.component.scss']
})
export class GetClientsDomainsComponent implements OnInit {
  getClientDomainsForm: FormGroup;
  loading: boolean = false; // Loading indicator
  clientDomains: any[] = []; // Holds the list of client domains
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.getClientDomainsForm = this.fb.group({
      clientid: ['', Validators.required] // Client ID is required to fetch the domains
    });
  }

  ngOnInit(): void {}

  // Submit the form to fetch client domains
  onSubmit(): void {
    if (this.getClientDomainsForm.invalid) {
      this.errorMessage = 'Please provide a valid Client ID.';
      return;
    }

    this.loading = true;
    this.clientDomains = [];
    this.errorMessage = '';

    const clientId = this.getClientDomainsForm.value.clientid;

    this.clientService.getClientsDomains(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.clientDomains = response.domains || [];
        } else {
          this.errorMessage = 'Failed to retrieve client domains: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching client domains:', error);
        this.errorMessage = 'An error occurred while retrieving client domains.';
        this.loading = false;
      }
    );
  }
}
