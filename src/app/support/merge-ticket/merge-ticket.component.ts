import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-merge-ticket',
  templateUrl: './merge-ticket.component.html',
  styleUrls: ['./merge-ticket.component.scss']
})
export class MergeTicketComponent {
  mergeTicketForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.mergeTicketForm = this.fb.group({
      ticketid: ['', Validators.required],  // ID of the primary ticket
      mergeticketid: ['', Validators.required]  // ID of the ticket to be merged
    });
  }

  // Submit the form to merge tickets
  onSubmit(): void {
    if (this.mergeTicketForm.invalid) {
      this.errorMessage = 'Please provide both Ticket IDs.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const mergeTicketData = this.mergeTicketForm.value;

    this.supportService.mergeTicket(mergeTicketData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Tickets merged successfully!';
          this.mergeTicketForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to merge tickets: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error merging tickets:', error);
        this.errorMessage = 'An error occurred while merging the tickets.';
        this.loading = false;
      }
    );
  }
}
