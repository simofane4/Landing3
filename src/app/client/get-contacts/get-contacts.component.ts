import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-contacts',
  templateUrl: './get-contacts.component.html',
  styleUrls: ['./get-contacts.component.scss']
})
export class GetContactsComponent implements OnInit {
  getContactsForm: FormGroup;
  loading: boolean = false; // Loading indicator
  clientContacts: any[] = []; // Holds the list of client contacts
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.getContactsForm = this.fb.group({
      clientid: ['', Validators.required] // Client ID is required to fetch the contacts
    });
  }

  ngOnInit(): void {}

  // Submit the form to fetch client contacts
  onSubmit(): void {
    if (this.getContactsForm.invalid) {
      this.errorMessage = 'Please provide a valid Client ID.';
      return;
    }

    this.loading = true;
    this.clientContacts = [];
    this.errorMessage = '';

    const clientId = this.getContactsForm.value.clientid;

    this.clientService.getContacts(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.clientContacts = response.contacts || [];
        } else {
          this.errorMessage = 'Failed to retrieve client contacts: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching client contacts:', error);
        this.errorMessage = 'An error occurred while retrieving client contacts.';
        this.loading = false;
      }
    );
  }
}
