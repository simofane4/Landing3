import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  addClientForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.addClientForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postcode: ['', Validators.required],
      country: ['', Validators.required],
      phonenumber: ['', Validators.required],
      password2: ['', Validators.required], // Password field in WHMCS API
      companyname: [''], // Optional
    });
  }

  ngOnInit(): void {}

  // Submit the form to add a new client
  onSubmit(): void {
    if (this.addClientForm.invalid) {
      this.errorMessage = 'Please provide valid client details.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const clientData = this.addClientForm.value;

    this.clientService.addClient(clientData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Client added successfully!';
          this.addClientForm.reset();
        } else {
          this.errorMessage = 'Failed to add client: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding client:', error);
        this.errorMessage = 'An error occurred while adding the client.';
        this.loading = false;
      }
    );
  }
}
