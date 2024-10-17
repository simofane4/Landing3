import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-domain-update-whois-info',
  templateUrl: './domain-update-whois-info.component.html',
  styleUrls: ['./domain-update-whois-info.component.scss']
})
export class DomainUpdateWhoisInfoComponent implements OnInit {
  whoisForm: FormGroup; // Form for WHOIS information
  loading: boolean = false; // Loading state
  successMessage: string = ''; // Success message
  errorMessage: string = ''; // Error message

  whoisFields: string[] = [ // List of WHOIS fields
    'firstname',
    'lastname',
    'companyname',
    'email',
    'address1',
    'city',
    'state',
    'postcode',
    'country',
    'phonenumber'
  ];

  constructor(
    private domainsService: DomainsService,
    private fb: FormBuilder
  ) {
    // Initialize form with dynamic controls
    this.whoisForm = this.fb.group(
      this.createControls()
    );
  }

  ngOnInit(): void {}

  // Helper function to create dynamic form controls
  private createControls(): { [key: string]: any } {
    const controls: { [key: string]: any } = {};
    this.whoisFields.forEach((field) => {
      controls[field] = ['', Validators.required];
    });
    controls['domain'] = ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+$')]];
    return controls;
  }

  // Submit the form to update WHOIS information
  onSubmit(): void {
    if (this.whoisForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const whoisData = this.whoisForm.value;

    this.domainsService.updateWhoisInfo(whoisData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'WHOIS information updated successfully!';
        } else {
          this.errorMessage = 'Failed to update WHOIS info: ' + response.message;
        }
        this.loading = false;
        this.whoisForm.reset();
      },
      (error) => {
        console.error('Error updating WHOIS info:', error);
        this.errorMessage = 'An error occurred during the update.';
        this.loading = false;
      }
    );
  }
}
