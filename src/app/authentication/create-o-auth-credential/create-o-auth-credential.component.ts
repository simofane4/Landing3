import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-create-o-auth-credential',
  templateUrl: './create-o-auth-credential.component.html',
  styleUrls: ['./create-o-auth-credential.component.scss']
})
export class CreateOAuthCredentialComponent implements OnInit {
  createOAuthCredentialForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    // Initialize form with required fields
    this.createOAuthCredentialForm = this.fb.group({
      clientName: ['', Validators.required],
      redirectUri: ['', [Validators.required, Validators.pattern('https?://.+')]],
      scopes: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.createOAuthCredentialForm.invalid) {
      this.errorMessage = 'Please provide valid data.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const credentialData = this.createOAuthCredentialForm.value;

    this.authService.createOAuthCredential(credentialData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'OAuth Credential created successfully!';
          this.createOAuthCredentialForm.reset();
        } else {
          this.errorMessage = 'Failed to create OAuth credential: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error creating OAuth credential:', error);
        this.errorMessage = 'An error occurred while creating the OAuth credential.';
        this.loading = false;
      }
    );
  }
}
