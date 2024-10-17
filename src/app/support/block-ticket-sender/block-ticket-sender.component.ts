import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-block-ticket-sender',
  templateUrl: './block-ticket-sender.component.html',
  styleUrls: ['./block-ticket-sender.component.scss']
})
export class BlockTicketSenderComponent {
  blockTicketSenderForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.blockTicketSenderForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      reason: [''] // Optional: Reason for blocking the sender
    });
  }

  // Submit the form to block a ticket sender
  onSubmit(): void {
    if (this.blockTicketSenderForm.invalid) {
      this.errorMessage = 'Please provide a valid email address.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const blockSenderData = this.blockTicketSenderForm.value;

    this.supportService.blockTicketSender(blockSenderData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Ticket sender blocked successfully!';
          this.blockTicketSenderForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to block ticket sender: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error blocking ticket sender:', error);
        this.errorMessage = 'An error occurred while blocking the ticket sender.';
        this.loading = false;
      }
    );
  }
}
