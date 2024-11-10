import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service'; // Replace with your actual service if different

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup; // Form to add a user
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    // Initialize the form group with fields
    this.addUserForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
      
    });
  }

  ngOnInit(): void {}

  // Submit the form to add a new user
  onSubmit(): void {
    if (this.addUserForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const userData = this.addUserForm.value;

    this.usersService.addUser(userData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'User added successfully!';
          this.addUserForm.reset();
        } else {
          this.errorMessage = 'Failed to add user: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding user:', error);
        this.errorMessage = 'An error occurred while adding the user.';
        this.loading = false;
      }
    );
  }
}
