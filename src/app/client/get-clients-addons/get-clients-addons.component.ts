import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-clients-addons',
  templateUrl: './get-clients-addons.component.html',
  styleUrls: ['./get-clients-addons.component.scss']
})
export class GetClientsAddonsComponent implements OnInit {
  getClientAddonsForm: FormGroup;
  loading: boolean = false; // Loading indicator
  clientAddons: any[] = []; // Holds the list of client addons
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.getClientAddonsForm = this.fb.group({
      clientid: ['', Validators.required] // Client ID is required to fetch the addons
    });
  }

  ngOnInit(): void {}

  // Submit the form to fetch client addons
  onSubmit(): void {
    if (this.getClientAddonsForm.invalid) {
      this.errorMessage = 'Please provide a valid Client ID.';
      return;
    }

    this.loading = true;
    this.clientAddons = [];
    this.errorMessage = '';

    const clientId = this.getClientAddonsForm.value.clientid;

    this.clientService.getClientsAddons(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.clientAddons = response.addons || [];
        } else {
          this.errorMessage = 'Failed to retrieve client addons: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching client addons:', error);
        this.errorMessage = 'An error occurred while retrieving client addons.';
        this.loading = false;
      }
    );
  }
}
