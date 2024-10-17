import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-get-user-permissions',
  templateUrl: './get-user-permissions.component.html',
  styleUrls: ['./get-user-permissions.component.scss']
})
export class GetUserPermissionsComponent implements OnInit {
  permissionsForm: FormGroup; // Form for entering user ID
  permissions: string[] = []; // Holds the user's permissions
  loading: boolean = false; // Loading state indicator
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    // Initialize the form with userId field
    this.permissionsForm = this.fb.group({
      userId: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // Submit the form to fetch user permissions
  onSubmit(): void {
    if (this.permissionsForm.invalid) {
      this.errorMessage = 'Please enter a valid User ID.';
      return;
    }

    this.loading = true;
    this.permissions = [];
    this.errorMessage = '';

    const { userId } = this.permissionsForm.value;

    this.usersService.getUserPermissions(userId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.permissions = response.permissions || [];
        } else {
          this.errorMessage = 'Failed to retrieve permissions: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching user permissions:', error);
        this.errorMessage = 'An error occurred while fetching the permissions.';
        this.loading = false;
      }
    );
  }
}
