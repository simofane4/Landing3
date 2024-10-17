import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-delete-ticket',
  templateUrl: './delete-ticket.component.html',
  styleUrls: ['./delete-ticket.component.scss']
})
export class DeleteTicketComponent {
  deleteTicketForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.deleteTicketForm = this.fb.group({
      ticketid: ['', Validators.required] // Ticket ID is required to delete a ticket
    });
  }

  // Submit the form to delete a ticket
  onSubmit(): void {
    if (this.deleteTicketForm.invalid) {
      this.errorMessage = 'Please provide a valid Ticket ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const ticketIdData = this.deleteTicketForm.value;

    this.supportService.deleteTicket(ticketIdData.ticketid).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Ticket deleted successfully!';
          this.deleteTicketForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to delete ticket: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error deleting ticket:', error);
        this.errorMessage = 'An error occurred while deleting the ticket.';
        this.loading = false;
      }
    );
  }
}
