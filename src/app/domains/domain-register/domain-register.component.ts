import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-domain-register',
  templateUrl: './domain-register.component.html',
  styleUrls: ['./domain-register.component.scss']
})
export class DomainRegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading: boolean = false; // Indicates loading state
  successMessage: string = ''; // Stores success message
  errorMessage: string = ''; // Stores error messages
  jsonResponse:any;
  constructor(
    private domainsService: DomainsService,
    private fb: FormBuilder
  ) {
    // Initialize form with form builder
    this.registerForm = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+$')]],
      regperiod: [1, [Validators.required, Validators.min(1)]],
      dnsManagement: [false],
      emailForwarding: [false],
      idProtection: [false]
    });
  }

  ngOnInit(): void {}

  // Submit form to register a new domain
  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = this.registerForm.value;

    this.domainsService.registerDomain(formData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Domain registered successfully!';
          this.jsonResponse = response;
        } else {
          this.errorMessage = 'Domain registration failed: ' + response.message;
          this.jsonResponse = response;
        }
        this.loading = false;
        this.registerForm.reset();
      },
      (error) => {
        console.error('Error registering domain:', error);
        this.errorMessage = 'An error occurred during registration.';
        this.loading = false;
      }
    );
  }
}
