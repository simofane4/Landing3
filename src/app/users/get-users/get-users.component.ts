import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent implements OnInit {
  users: any[] = []; // Holds the list of users
  loading: boolean = false; // Loading state indicator
  errorMessage: string = ''; // Error message

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.fetchUsers(); // Fetch the users when the component initializes
  }

  // Fetch the list of users from the API
  fetchUsers(): void {
    this.loading = true;
    this.errorMessage = '';

    this.usersService.getUsers().subscribe(
      (response) => {
        if (response.result === 'success' && response.users) {
          this.users = response.users;
        } else {
          this.errorMessage = 'Failed to retrieve users: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.errorMessage = 'An error occurred while fetching the users.';
        this.loading = false;
      }
    );
  }
}
