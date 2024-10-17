import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-open-ticket',
  templateUrl: './open-ticket.component.html',
  styleUrls: ['./open-ticket.component.scss']
})
export class OpenTicketComponent {
  openTicketForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.openTicketForm = this.fb.group({
      clientid: ['', Validators.required], // ID of the client submitting the ticket
      departmentid: ['', Validators.required], // Department ID
      subject: ['', Validators.required], // Subject of the ticket
      message: ['', Validators.required], // Message content
      priority: ['Medium', Validators.required] // Priority of the ticket (Low, Medium, High)
    });
  }

  // Submit the form to open a new ticket
  onSubmit(): void {
    if (this.openTicketForm.invalid) {
      this.errorMessage = 'Please provide all required fields.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const ticketData = this.openTicketForm.value;

    this.supportService.openTicket(ticketData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Ticket opened successfully!';
          this.openTicketForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to open ticket: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error opening ticket:', error);
        this.errorMessage = 'An error occurred while opening the ticket.';
        this.loading = false;
      }
    );
  }
}
