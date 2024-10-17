import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-add-client-note',
  templateUrl: './add-client-note.component.html',
  styleUrls: ['./add-client-note.component.scss']
})
export class AddClientNoteComponent {
  addClientNoteForm: FormGroup;
  loading: boolean = false; // Loading indicator
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private supportService: SupportService) {
    // Initialize the form with required fields
    this.addClientNoteForm = this.fb.group({
      clientid: ['', Validators.required],
      note: ['', Validators.required]
    });
  }

  // Submit the form to add a client note
  onSubmit(): void {
    if (this.addClientNoteForm.invalid) {
      this.errorMessage = 'Please provide all required fields.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const clientNoteData = this.addClientNoteForm.value;

    this.supportService.addClientNote(clientNoteData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Client note added successfully!';
          this.addClientNoteForm.reset(); // Reset form after success
        } else {
          this.errorMessage = 'Failed to add client note: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error adding client note:', error);
        this.errorMessage = 'An error occurred while adding the client note.';
        this.loading = false;
      }
    );
  }
}
