import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-validate-login',
  templateUrl: './validate-login.component.html',
  styleUrls: ['./validate-login.component.scss']
})
export class ValidateLoginComponent implements OnInit {
  validateLoginForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    // Initialize form with required fields
    this.validateLoginForm = this.fb.group({
      username: ['', Validators.required], // Username
      password: ['', Validators.required]  // Password
    });
  }

  ngOnInit(): void {}

  // Submit form to validate login credentials
  onSubmit(): void {
    if (this.validateLoginForm.invalid) {
      this.errorMessage = 'Please provide valid login credentials.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { username, password } = this.validateLoginForm.value;

    this.authService.validateLogin(username, password).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Login successful!';
          this.validateLoginForm.reset();
        } else {
          this.errorMessage = 'Login failed: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error validating login:', error);
        this.errorMessage = 'An error occurred while validating the login.';
        this.loading = false;
      }
    );
  }
}
