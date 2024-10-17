import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-clients-details',
  templateUrl: './get-clients-details.component.html',
  styleUrls: ['./get-clients-details.component.scss']
})
export class GetClientsDetailsComponent implements OnInit {
  getClientDetailsForm: FormGroup;
  loading: boolean = false; // Loading indicator
  clientDetails: any = null; // Holds the client details
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.getClientDetailsForm = this.fb.group({
      clientid: ['', Validators.required] // Client ID is required to fetch the details
    });
  }

  ngOnInit(): void {}

  // Submit the form to fetch client details
  onSubmit(): void {
    if (this.getClientDetailsForm.invalid) {
      this.errorMessage = 'Please provide a valid Client ID.';
      return;
    }

    this.loading = true;
    this.clientDetails = null;
    this.errorMessage = '';

    const clientId = this.getClientDetailsForm.value.clientid;

    this.clientService.getClientsDetails(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.clientDetails = response.client;
        } else {
          this.errorMessage = 'Failed to retrieve client details: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching client details:', error);
        this.errorMessage = 'An error occurred while retrieving client details.';
        this.loading = false;
      }
    );
  }
}
