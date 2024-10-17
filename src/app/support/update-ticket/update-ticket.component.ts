import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.scss']
})
export class UpdateTicketComponent {
  updateTicketForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.updateTicketForm = this.fb.group({
      ticketid: ['', Validators.required], // ID of the ticket to be updated
      status: ['', Validators.required], // New status of the ticket
      subject: ['', Validators.required], // Updated subject of the ticket
      message: ['', Validators.required]  // Updated message or reply to the ticket
    });
  }

  // Submit the form to update a ticket
  onSubmit(): void {
    if (this.updateTicketForm.invalid) {
      this.errorMessage = 'Please provide all required fields.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const ticketData = this.updateTicketForm.value;

    this.supportService.updateTicket(ticketData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Ticket updated successfully!';
          this.updateTicketForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to update ticket: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating ticket:', error);
        this.errorMessage = 'An error occurred while updating the ticket.';
        this.loading = false;
      }
    );
  }
}
