import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete-user-client',
  templateUrl: './delete-user-client.component.html',
  styleUrls: ['./delete-user-client.component.scss']
})
export class DeleteUserClientComponent implements OnInit {
  deleteForm: FormGroup; // Form for deleting a user/client
  loading: boolean = false; // Loading state indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    // Initialize the form with userId input field
    this.deleteForm = this.fb.group({
      userId: ['', Validators.required] // User/Client ID is required
    });
  }

  ngOnInit(): void {}

  // Submit the form to delete a user/client
  onSubmit(): void {
    if (this.deleteForm.invalid) {
      this.errorMessage = 'Please provide a valid User/Client ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { userId } = this.deleteForm.value;

    this.usersService.deleteUserClient(userId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'User/Client deleted successfully!';
          this.deleteForm.reset();
        } else {
          this.errorMessage = 'Failed to delete User/Client: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error deleting User/Client:', error);
        this.errorMessage = 'An error occurred while deleting the User/Client.';
        this.loading = false;
      }
    );
  }
}
