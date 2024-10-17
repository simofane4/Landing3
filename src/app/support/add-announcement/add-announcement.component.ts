import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent {
  addAnnouncementForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.addAnnouncementForm = this.fb.group({
      title: ['', Validators.required],
      announcement: ['', Validators.required],
      published: [true] // Default value to true
    });
  }

  // Submit the form to add an announcement
  onSubmit(): void {
    if (this.addAnnouncementForm.invalid) {
      this.errorMessage = 'Please provide all required fields.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const announcementData = this.addAnnouncementForm.value;

    this.supportService.addAnnouncement(announcementData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Announcement added successfully!';
          this.addAnnouncementForm.reset({ published: true }); // Reset form and set published to true
        } else {
          this.errorMessage = 'Failed to add announcement: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding announcement:', error);
        this.errorMessage = 'An error occurred while adding the announcement.';
        this.loading = false;
      }
    );
  }
}
