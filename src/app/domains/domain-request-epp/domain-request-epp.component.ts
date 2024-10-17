import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-domain-request-epp',
  templateUrl: './domain-request-epp.component.html',
  styleUrls: ['./domain-request-epp.component.scss']
})
export class DomainRequestEppComponent implements OnInit {
  eppForm: FormGroup; // Form to input domain name
  loading: boolean = false; // Loading state indicator
  successMessage: string = ''; // Stores success message
  errorMessage: string = ''; // Stores error message

  constructor(
    private domainsService: DomainsService,
    private fb: FormBuilder
  ) {
    // Initialize the form
    this.eppForm = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+$')]]
    });
  }

  ngOnInit(): void {}

  // Submit the form to request the EPP code
  onSubmit(): void {
    if (this.eppForm.invalid) {
      this.errorMessage = 'Please enter a valid domain name.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const domainName = this.eppForm.value.domain;

    this.domainsService.requestEppCode(domainName).subscribe(
      (response) => {
        if (response.result === 'success' && response.eppcode) {
          this.successMessage = `EPP Code: ${response.eppcode}`;
        } else {
          this.errorMessage = 'Failed to retrieve the EPP code: ' + response.message;
        }
        this.loading = false;
        this.eppForm.reset();
      },
      (error) => {
        console.error('Error requesting EPP code:', error);
        this.errorMessage = 'An error occurred while requesting the EPP code.';
        this.loading = false;
      }
    );
  }
}
