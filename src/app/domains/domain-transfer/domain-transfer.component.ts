import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-domain-transfer',
  templateUrl: './domain-transfer.component.html',
  styleUrls: ['./domain-transfer.component.scss']
})
export class DomainTransferComponent implements OnInit {
  transferForm: FormGroup; // Form to input domain, EPP code, and other transfer data
  loading: boolean = false; // Loading state indicator
  successMessage: string = ''; // Stores success message
  errorMessage: string = ''; // Stores error message

  constructor(
    private domainsService: DomainsService,
    private fb: FormBuilder
  ) {
    // Initialize the form
    this.transferForm = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+$')]],
      eppCode: ['', Validators.required], // EPP code required for domain transfer
      regperiod: [1, [Validators.required, Validators.min(1)]], // Registration period
      idProtection: [false], // Optional ID protection
    });
  }

  ngOnInit(): void {}

  // Submit the form to transfer the domain
  onSubmit(): void {
    if (this.transferForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = this.transferForm.value;

    this.domainsService.transferDomain(formData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Domain transferred successfully!';
        } else {
          this.errorMessage = 'Failed to transfer domain: ' + response.message;
        }
        this.loading = false;
        this.transferForm.reset();
      },
      (error) => {
        console.error('Error transferring domain:', error);
        this.errorMessage = 'An error occurred during the transfer.';
        this.loading = false;
      }
    );
  }
}
