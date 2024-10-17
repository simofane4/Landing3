import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-list-o-auth-credentials',
  templateUrl: './list-o-auth-credentials.component.html',
  styleUrls: ['./list-o-auth-credentials.component.scss']
})
export class ListOAuthCredentialsComponent implements OnInit {
  loading: boolean = false; // Loading indicator
  oauthCredentials: any[] = []; // Holds the list of OAuth credentials
  errorMessage: string = ''; // Error message

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.fetchOAuthCredentials();
  }

  // Fetch all OAuth credentials using the AuthenticationService
  fetchOAuthCredentials(): void {
    this.loading = true;
    this.errorMessage = '';
    this.oauthCredentials = [];

    this.authService.listOAuthCredentials().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.oauthCredentials = response.oauthcredentials || [];
        } else {
          this.errorMessage = 'Failed to retrieve OAuth credentials: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching OAuth credentials:', error);
        this.errorMessage = 'An error occurred while retrieving OAuth credentials.';
        this.loading = false;
      }
    );
  }
}
