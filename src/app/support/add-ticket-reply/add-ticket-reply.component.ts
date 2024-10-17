import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-add-ticket-reply',
  templateUrl: './add-ticket-reply.component.html',
  styleUrls: ['./add-ticket-reply.component.scss']
})
export class AddTicketReplyComponent {
  addTicketReplyForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.addTicketReplyForm = this.fb.group({
      ticketid: ['', Validators.required],
      message: ['', Validators.required],
      clientid: ['', Validators.required] // Optional: Include the Client ID if necessary
    });
  }

  // Submit the form to add a ticket reply
  onSubmit(): void {
    if (this.addTicketReplyForm.invalid) {
      this.errorMessage = 'Please provide all required fields.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const ticketReplyData = this.addTicketReplyForm.value;

    this.supportService.addTicketReply(ticketReplyData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Ticket reply added successfully!';
          this.addTicketReplyForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to add ticket reply: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding ticket reply:', error);
        this.errorMessage = 'An error occurred while adding the ticket reply.';
        this.loading = false;
      }
    );
  }
}
