import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-close-client',
  templateUrl: './close-client.component.html',
  styleUrls: ['./close-client.component.scss']
})
export class CloseClientComponent implements OnInit {
  closeClientForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.closeClientForm = this.fb.group({
      clientid: ['', Validators.required] // Client ID is required to close the client
    });
  }

  ngOnInit(): void {}

  // Submit the form to close the client account
  onSubmit(): void {
    if (this.closeClientForm.invalid) {
      this.errorMessage = 'Please provide a valid Client ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const clientId = this.closeClientForm.value.clientid;

    this.clientService.closeClient(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Client closed successfully!';
          this.closeClientForm.reset();
        } else {
          this.errorMessage = 'Failed to close client: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error closing client:', error);
        this.errorMessage = 'An error occurred while closing the client.';
        this.loading = false;
      }
    );
  }
}
