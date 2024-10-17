import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-emails',
  templateUrl: './get-emails.component.html',
  styleUrls: ['./get-emails.component.scss']
})
export class GetEmailsComponent implements OnInit {
  getEmailsForm: FormGroup;
  loading: boolean = false; // Loading indicator
  clientEmails: any[] = []; // Holds the list of client emails
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.getEmailsForm = this.fb.group({
      clientid: ['', Validators.required] // Client ID is required to fetch the emails
    });
  }

  ngOnInit(): void {}

  // Submit the form to fetch client emails
  onSubmit(): void {
    if (this.getEmailsForm.invalid) {
      this.errorMessage = 'Please provide a valid Client ID.';
      return;
    }

    this.loading = true;
    this.clientEmails = [];
    this.errorMessage = '';

    const clientId = this.getEmailsForm.value.clientid;

    this.clientService.getEmails(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.clientEmails = response.emails || [];
        } else {
          this.errorMessage = 'Failed to retrieve client emails: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching client emails:', error);
        this.errorMessage = 'An error occurred while retrieving client emails.';
        this.loading = false;
      }
    );
  }
}
