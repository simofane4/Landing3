import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-delete-ticket-reply',
  templateUrl: './delete-ticket-reply.component.html',
  styleUrls: ['./delete-ticket-reply.component.scss']
})
export class DeleteTicketReplyComponent {
  deleteTicketReplyForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.deleteTicketReplyForm = this.fb.group({
      ticketreplyid: ['', Validators.required] // Ticket Reply ID is required to delete a ticket reply
    });
  }

  // Submit the form to delete a ticket reply
  onSubmit(): void {
    if (this.deleteTicketReplyForm.invalid) {
      this.errorMessage = 'Please provide a valid Ticket Reply ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const ticketReplyIdData = this.deleteTicketReplyForm.value;

    this.supportService.deleteTicketReply(ticketReplyIdData.ticketreplyid).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Ticket reply deleted successfully!';
          this.deleteTicketReplyForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to delete ticket reply: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error deleting ticket reply:', error);
        this.errorMessage = 'An error occurred while deleting the ticket reply.';
        this.loading = false;
      }
    );
  }
}
