import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-update-o-auth-credential',
  templateUrl: './update-o-auth-credential.component.html',
  styleUrls: ['./update-o-auth-credential.component.scss']
})
export class UpdateOAuthCredentialComponent implements OnInit {
  updateOAuthCredentialForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    // Initialize form with required fields
    this.updateOAuthCredentialForm = this.fb.group({
      credentialId: ['', Validators.required], // Credential ID
      clientName: ['', Validators.required], // Client name
      redirectUri: ['', [Validators.required, Validators.pattern('https?://.+')]], // Redirect URI
      scopes: ['', Validators.required] // Scopes
    });
  }

  ngOnInit(): void {}

  // Submit form to update the OAuth credential
  onSubmit(): void {
    if (this.updateOAuthCredentialForm.invalid) {
      this.errorMessage = 'Please provide valid data.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const credentialData = this.updateOAuthCredentialForm.value;

    this.authService.updateOAuthCredential(credentialData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'OAuth Credential updated successfully!';
          this.updateOAuthCredentialForm.reset();
        } else {
          this.errorMessage = 'Failed to update OAuth credential: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating OAuth credential:', error);
        this.errorMessage = 'An error occurred while updating the OAuth credential.';
        this.loading = false;
      }
    );
  }
}
