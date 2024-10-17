import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-client-invite',
  templateUrl: './create-client-invite.component.html',
  styleUrls: ['./create-client-invite.component.scss']
})
export class CreateClientInviteComponent implements OnInit {
  inviteForm: FormGroup; // Form for client invite
  loading: boolean = false; // Loading state indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    // Initialize the form with form controls
    this.inviteForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      customMessage: [''] // Optional custom message
    });
  }

  ngOnInit(): void {}

  // Submit the invite form
  onSubmit(): void {
    if (this.inviteForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const inviteData = this.inviteForm.value;

    this.usersService.createClientInvite(inviteData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Client invite sent successfully!';
          this.inviteForm.reset();
        } else {
          this.errorMessage = 'Failed to send invite: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error sending invite:', error);
        this.errorMessage = 'An error occurred while sending the invite.';
        this.loading = false;
      }
    );
  }
}
