import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.scss']
})
export class DeleteClientComponent implements OnInit {
  deleteClientForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.deleteClientForm = this.fb.group({
      clientid: ['', Validators.required] // Client ID is required to delete the client
    });
  }

  ngOnInit(): void {}

  // Submit the form to delete the client account
  onSubmit(): void {
    if (this.deleteClientForm.invalid) {
      this.errorMessage = 'Please provide a valid Client ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const clientId = this.deleteClientForm.value.clientid;

    this.clientService.deleteClient(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Client deleted successfully!';
          this.deleteClientForm.reset();
        } else {
          this.errorMessage = 'Failed to delete client: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error deleting client:', error);
        this.errorMessage = 'An error occurred while deleting the client.';
        this.loading = false;
      }
    );
  }
}
