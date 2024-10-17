import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  addContactForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.addContactForm = this.fb.group({
      clientid: ['', Validators.required], // Client ID is required to add a contact
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postcode: ['', Validators.required],
      country: ['', Validators.required],
      phonenumber: ['', Validators.required],
      password2: ['', Validators.required], // WHMCS requires this for the contact
      permissions: [''], // Optional contact permissions
    });
  }

  ngOnInit(): void {}

  // Submit the form to add a new contact
  onSubmit(): void {
    if (this.addContactForm.invalid) {
      this.errorMessage = 'Please provide valid contact details.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const contactData = this.addContactForm.value;

    this.clientService.addContact(contactData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Contact added successfully!';
          this.addContactForm.reset();
        } else {
          this.errorMessage = 'Failed to add contact: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding contact:', error);
        this.errorMessage = 'An error occurred while adding the contact.';
        this.loading = false;
      }
    );
  }
}
