import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  updateUserForm: FormGroup; // Form to update user details
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    // Initialize form with controls
    this.updateUserForm = this.fb.group({
      userId: ['', Validators.required], // User ID is required
      name: ['', Validators.required], // Name is required
      email: ['', [Validators.required, Validators.email]], // Valid email required
      role: ['', Validators.required] // Role is required
    });
  }

  ngOnInit(): void {}

  // Submit form to update the user
  onSubmit(): void {
    if (this.updateUserForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const userData = this.updateUserForm.value;

    this.usersService.updateUser(userData.userId, userData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'User updated successfully!';
          this.updateUserForm.reset();
        } else {
          this.errorMessage = 'Failed to update user: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating user:', error);
        this.errorMessage = 'An error occurred while updating the user.';
        this.loading = false;
      }
    );
  }
}
