import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-clients',
  templateUrl: './get-clients.component.html',
  styleUrls: ['./get-clients.component.scss']
})
export class GetClientsComponent implements OnInit {
  loading: boolean = false; // Loading indicator
  clients: any[] = []; // Holds the list of clients
  errorMessage: string = ''; // Error message

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  // Fetch all clients using the ClientService
  fetchClients(): void {
    this.loading = true;
    this.errorMessage = '';
    this.clients = [];

    this.clientService.getClients().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.clients = response.clients || [];
        } else {
          this.errorMessage = 'Failed to retrieve clients: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching clients:', error);
        this.errorMessage = 'An error occurred while retrieving clients.';
        this.loading = false;
      }
    );
  }
}
