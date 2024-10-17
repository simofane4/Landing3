import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-get-permissions-list',
  templateUrl: './get-permissions-list.component.html',
  styleUrls: ['./get-permissions-list.component.scss']
})
export class GetPermissionsListComponent implements OnInit {
  permissions: any[] = []; // Holds the permissions list
  loading: boolean = false; // Loading indicator
  errorMessage: string = ''; // Error message

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.fetchPermissionsList(); // Fetch the permissions on component initialization
  }

  // Fetch permissions list from API
  fetchPermissionsList(): void {
    this.loading = true;
    this.errorMessage = '';

    this.usersService.getPermissionsList().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.permissions = response.permissions || [];
        } else {
          this.errorMessage = 'Failed to retrieve permissions: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching permissions:', error);
        this.errorMessage = 'An error occurred while fetching the permissions.';
        this.loading = false;
      }
    );
  }
}
