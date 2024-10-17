import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-client-password',
  templateUrl: './get-client-password.component.html',
  styleUrls: ['./get-client-password.component.scss']
})
export class GetClientPasswordComponent implements OnInit {
  getClientPasswordForm: FormGroup;
  loading: boolean = false; // Loading indicator
  clientPassword: string = ''; // Holds the fetched client password
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.getClientPasswordForm = this.fb.group({
      clientid: ['', Validators.required] // Client ID is required to get the password
    });
  }

  ngOnInit(): void {}

  // Submit the form to fetch the client's password
  onSubmit(): void {
    if (this.getClientPasswordForm.invalid) {
      this.errorMessage = 'Please provide a valid Client ID.';
      return;
    }

    this.loading = true;
    this.clientPassword = '';
    this.errorMessage = '';

    const clientId = this.getClientPasswordForm.value.clientid;

    this.clientService.getClientPassword(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.clientPassword = response.password;
        } else {
          this.errorMessage = 'Failed to retrieve client password: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching client password:', error);
        this.errorMessage = 'An error occurred while retrieving the client password.';
        this.loading = false;
      }
    );
  }
}
