import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-add-ticket-note',
  templateUrl: './add-ticket-note.component.html',
  styleUrls: ['./add-ticket-note.component.scss']
})
export class AddTicketNoteComponent {
  addTicketNoteForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.addTicketNoteForm = this.fb.group({
      ticketid: ['', Validators.required],
      note: ['', Validators.required]
    });
  }

  // Submit the form to add a ticket note
  onSubmit(): void {
    if (this.addTicketNoteForm.invalid) {
      this.errorMessage = 'Please provide all required fields.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const ticketNoteData = this.addTicketNoteForm.value;

    this.supportService.addTicketNote(ticketNoteData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Ticket note added successfully!';
          this.addTicketNoteForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to add ticket note: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding ticket note:', error);
        this.errorMessage = 'An error occurred while adding the ticket note.';
        this.loading = false;
      }
    );
  }
}
