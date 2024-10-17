import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-delete-o-auth-credential',
  templateUrl: './delete-o-auth-credential.component.html',
  styleUrls: ['./delete-o-auth-credential.component.scss']
})
export class DeleteOAuthCredentialComponent implements OnInit {
  deleteOAuthCredentialForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    // Initialize form with required fields
    this.deleteOAuthCredentialForm = this.fb.group({
      credentialId: ['', Validators.required] // OAuth Credential ID
    });
  }

  ngOnInit(): void {}

  // Submit form to delete the OAuth credential
  onSubmit(): void {
    if (this.deleteOAuthCredentialForm.invalid) {
      this.errorMessage = 'Please provide a valid OAuth Credential ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const credentialId = this.deleteOAuthCredentialForm.value.credentialId;

    this.authService.deleteOAuthCredential(credentialId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'OAuth Credential deleted successfully!';
          this.deleteOAuthCredentialForm.reset();
        } else {
          this.errorMessage = 'Failed to delete OAuth credential: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error deleting OAuth credential:', error);
        this.errorMessage = 'An error occurred while deleting the OAuth credential.';
        this.loading = false;
      }
    );
  }
}
