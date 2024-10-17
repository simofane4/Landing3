import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss']
})
export class DeleteContactComponent implements OnInit {
  deleteContactForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.deleteContactForm = this.fb.group({
      contactid: ['', Validators.required] // Contact ID is required to delete the contact
    });
  }

  ngOnInit(): void {}

  // Submit the form to delete the contact
  onSubmit(): void {
    if (this.deleteContactForm.invalid) {
      this.errorMessage = 'Please provide a valid Contact ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const contactId = this.deleteContactForm.value.contactid;

    this.clientService.deleteContact(contactId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Contact deleted successfully!';
          this.deleteContactForm.reset();
        } else {
          this.errorMessage = 'Failed to delete contact: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error deleting contact:', error);
        this.errorMessage = 'An error occurred while deleting the contact.';
        this.loading = false;
      }
    );
  }
}
