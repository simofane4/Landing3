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
      email: ['', Validators.required], // Username
      password2: ['', Validators.required]  // Password
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

    const { email, password2 } = this.validateLoginForm.value;

    this.authService.validateLogin(email, password2).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Login successful!';
          this.validateLoginForm.reset();
          console.log(response);
        } else {
          this.errorMessage = 'Login failed: ' + response.message;
          console.log(response);
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
