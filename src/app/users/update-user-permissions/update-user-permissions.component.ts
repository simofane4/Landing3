import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-update-user-permissions',
  templateUrl: './update-user-permissions.component.html',
  styleUrls: ['./update-user-permissions.component.scss']
})
export class UpdateUserPermissionsComponent implements OnInit {
  permissionsForm: FormGroup; // Form to manage permissions
  loading: boolean = false; // Loading state
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message
  permissions: string[] = []; // List of available permissions

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    this.permissionsForm = this.fb.group({
      userId: ['', Validators.required], // User ID input
      selectedPermissions: [[]] // Holds selected permissions
    });
  }

  ngOnInit(): void {
    this.loadPermissions(); // Load permissions on init
  }

  // Load available permissions from the API
  loadPermissions(): void {
    this.usersService.getPermissionsList().subscribe(
      (response) => {
        if (response.result === 'success' && response.permissions) {
          this.permissions = response.permissions;
        } else {
          this.errorMessage = 'Failed to load permissions: ' + response.message;
        }
      },
      (error) => {
        console.error('Error loading permissions:', error);
        this.errorMessage = 'An error occurred while loading the permissions.';
      }
    );
  }

  // Handle permission checkbox change
  onPermissionChange(event: any): void {
    const selectedPermissions = this.permissionsForm.get('selectedPermissions')?.value || [];
    if (event.target.checked) {
      selectedPermissions.push(event.target.value);
    } else {
      const index = selectedPermissions.indexOf(event.target.value);
      if (index > -1) {
        selectedPermissions.splice(index, 1);
      }
    }
    this.permissionsForm.get('selectedPermissions')?.setValue(selectedPermissions);
  }

  // Submit form to update permissions
  onSubmit(): void {
    if (this.permissionsForm.invalid) {
      this.errorMessage = 'Please provide valid input.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { userId, selectedPermissions } = this.permissionsForm.value;

    this.usersService.updateUserPermissions(userId, selectedPermissions).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'User permissions updated successfully!';
          this.permissionsForm.reset();
        } else {
          this.errorMessage = 'Failed to update permissions: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error updating permissions:', error);
        this.errorMessage = 'An error occurred while updating the permissions.';
        this.loading = false;
      }
    );
  }
}
