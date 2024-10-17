import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-update-ticket-reply',
  templateUrl: './update-ticket-reply.component.html',
  styleUrls: ['./update-ticket-reply.component.scss']
})
export class UpdateTicketReplyComponent {
  updateTicketReplyForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.updateTicketReplyForm = this.fb.group({
      ticketreplyid: ['', Validators.required], // ID of the reply to be updated
      message: ['', Validators.required]  // Updated message or reply content
    });
  }

  // Submit the form to update a ticket reply
  onSubmit(): void {
    if (this.updateTicketReplyForm.invalid) {
      this.errorMessage = 'Please provide all required fields.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const replyData = this.updateTicketReplyForm.value;

    this.supportService.updateTicketReply(replyData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Ticket reply updated successfully!';
          this.updateTicketReplyForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to update ticket reply: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating ticket reply:', error);
        this.errorMessage = 'An error occurred while updating the ticket reply.';
        this.loading = false;
      }
    );
  }
}
