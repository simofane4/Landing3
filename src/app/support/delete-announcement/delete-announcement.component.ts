import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-delete-announcement',
  templateUrl: './delete-announcement.component.html',
  styleUrls: ['./delete-announcement.component.scss']
})
export class DeleteAnnouncementComponent {
  deleteAnnouncementForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.deleteAnnouncementForm = this.fb.group({
      announcementid: ['', Validators.required] // Announcement ID is required to delete an announcement
    });
  }

  // Submit the form to delete an announcement
  onSubmit(): void {
    if (this.deleteAnnouncementForm.invalid) {
      this.errorMessage = 'Please provide a valid Announcement ID.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const announcementIdData = this.deleteAnnouncementForm.value;

    this.supportService.deleteAnnouncement(announcementIdData.announcementid).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Announcement deleted successfully!';
          this.deleteAnnouncementForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to delete announcement: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error deleting announcement:', error);
        this.errorMessage = 'An error occurred while deleting the announcement.';
        this.loading = false;
      }
    );
  }
}
