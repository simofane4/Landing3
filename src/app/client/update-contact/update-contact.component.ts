import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
  updateContactForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.updateContactForm = this.fb.group({
      contactid: ['', Validators.required], // Contact ID is required to update the contact
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

  // Submit the form to update the contact details
  onSubmit(): void {
    if (this.updateContactForm.invalid) {
      this.errorMessage = 'Please provide valid contact details.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const contactData = this.updateContactForm.value;

    this.clientService.updateContact(contactData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Contact updated successfully!';
          this.updateContactForm.reset();
        } else {
          this.errorMessage = 'Failed to update contact: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating contact:', error);
        this.errorMessage = 'An error occurred while updating the contact.';
        this.loading = false;
      }
    );
  }
}
