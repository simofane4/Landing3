import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-delete-ticket-note',
  templateUrl: './delete-ticket-note.component.html',
  styleUrls: ['./delete-ticket-note.component.scss']
})
export class DeleteTicketNoteComponent {
  deleteTicketNoteForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.deleteTicketNoteForm = this.fb.group({
      ticketnoteid: ['', Validators.required] // Ticket Note ID is required to delete a ticket note
    });
  }

  // Submit the form to delete a ticket note
  onSubmit(): void {
    if (this.deleteTicketNoteForm.invalid) {
      this.errorMessage = 'Please provide a valid Ticket Note ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const ticketNoteIdData = this.deleteTicketNoteForm.value;

    this.supportService.deleteTicketNote(ticketNoteIdData.ticketnoteid).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Ticket note deleted successfully!';
          this.deleteTicketNoteForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to delete ticket note: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error deleting ticket note:', error);
        this.errorMessage = 'An error occurred while deleting the ticket note.';
        this.loading = false;
      }
    );
  }
}
