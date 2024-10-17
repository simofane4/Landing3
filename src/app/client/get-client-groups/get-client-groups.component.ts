import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-client-groups',
  templateUrl: './get-client-groups.component.html',
  styleUrls: ['./get-client-groups.component.scss']
})
export class GetClientGroupsComponent implements OnInit {
  loading: boolean = false; // Loading indicator
  clientGroups: any[] = []; // Holds the list of client groups
  errorMessage: string = ''; // Error message

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchClientGroups();
  }

  // Fetch all client groups using the ClientService
  fetchClientGroups(): void {
    this.loading = true;
    this.errorMessage = '';
    this.clientGroups = [];

    this.clientService.getClientGroups().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.clientGroups = response.clientgroups || [];
        } else {
          this.errorMessage = 'Failed to retrieve client groups: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching client groups:', error);
        this.errorMessage = 'An error occurred while retrieving client groups.';
        this.loading = false;
      }
    );
  }
}
