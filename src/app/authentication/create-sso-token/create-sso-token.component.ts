import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-create-sso-token',
  templateUrl: './create-sso-token.component.html',
  styleUrls: ['./create-sso-token.component.scss']
})
export class CreateSsoTokenComponent implements OnInit {
  createSsoTokenForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    // Initialize form with required fields
    this.createSsoTokenForm = this.fb.group({
      clientId: ['', Validators.required] // Client ID
    });
  }

  ngOnInit(): void {}

  // Submit form to create the SSO token
  onSubmit(): void {
    if (this.createSsoTokenForm.invalid) {
      this.errorMessage = 'Please provide a valid Client ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const clientId = this.createSsoTokenForm.value.clientId;

    this.authService.createSsoToken(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'SSO Token created successfully!';
          this.createSsoTokenForm.reset();
        } else {
          this.errorMessage = 'Failed to create SSO token: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error creating SSO token:', error);
        this.errorMessage = 'An error occurred while creating the SSO token.';
        this.loading = false;
      }
    );
  }
}
