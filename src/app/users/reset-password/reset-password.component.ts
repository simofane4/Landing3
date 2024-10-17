import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup; // Form to reset password
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    // Initialize form with controls
    this.resetPasswordForm = this.fb.group({
      userId: ['', Validators.required], // User ID is required
      newPassword: ['', [Validators.required, Validators.minLength(6)]], // New password with validation
    });
  }

  ngOnInit(): void {}

  // Submit form to reset the password
  onSubmit(): void {
    if (this.resetPasswordForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { userId, newPassword } = this.resetPasswordForm.value;

    this.usersService.resetPassword(userId, newPassword).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Password reset successfully!';
          this.resetPasswordForm.reset();
        } else {
          this.errorMessage = 'Failed to reset password: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error resetting password:', error);
        this.errorMessage = 'An error occurred while resetting the password.';
        this.loading = false;
      }
    );
  }
}
