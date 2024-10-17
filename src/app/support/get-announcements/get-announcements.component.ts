import { Component, OnInit } from '@angular/core';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-get-announcements',
  templateUrl: './get-announcements.component.html',
  styleUrls: ['./get-announcements.component.scss']
})
export class GetAnnouncementsComponent implements OnInit {
  announcements: any[] = []; // Holds the list of announcements
  loading: boolean = false; // Loading indicator
  errorMessage: string = ''; // Error message

  constructor(private supportService: SupportService) {}

  ngOnInit(): void {
    this.getAnnouncements(); // Fetch announcements on component initialization
  }

  // Fetch announcements from the API
  getAnnouncements(): void {
    this.loading = true;
    this.errorMessage = '';

    this.supportService.getAnnouncements().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.announcements = response.announcements || [];
        } else {
          this.errorMessage = 'Failed to retrieve announcements: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching announcements:', error);
        this.errorMessage = 'An error occurred while retrieving the announcements.';
        this.loading = false;
      }
    );
  }
}
