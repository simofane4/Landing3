import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
  updateClientForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.updateClientForm = this.fb.group({
      clientid: ['', Validators.required], // Client ID is required to update the client
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postcode: ['', Validators.required],
      country: ['', Validators.required],
      phonenumber: ['', Validators.required],
      companyname: [''] // Optional field
    });
  }

  ngOnInit(): void {}

  // Submit the form to update the client details
  onSubmit(): void {
    if (this.updateClientForm.invalid) {
      this.errorMessage = 'Please provide valid client details.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const clientData = this.updateClientForm.value;

    this.clientService.updateClient(clientData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Client updated successfully!';
          this.updateClientForm.reset();
        } else {
          this.errorMessage = 'Failed to update client: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating client:', error);
        this.errorMessage = 'An error occurred while updating the client.';
        this.loading = false;
      }
    );
  }
}
