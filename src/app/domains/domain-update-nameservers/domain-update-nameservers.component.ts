import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-domain-update-nameservers',
  templateUrl: './domain-update-nameservers.component.html',
  styleUrls: ['./domain-update-nameservers.component.scss']
})
export class DomainUpdateNameserversComponent implements OnInit {
  nameserversForm: FormGroup; // Form for updating nameservers
  loading: boolean = false; // Loading state indicator
  successMessage: string = ''; // Stores success message
  errorMessage: string = ''; // Stores error message

  constructor(
    private domainsService: DomainsService,
    private fb: FormBuilder
  ) {
    // Initialize the form
    this.nameserversForm = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+$')]],
      ns1: ['', Validators.required],
      ns2: ['', Validators.required],
      ns3: [''],
      ns4: [''],
      ns5: ['']
    });
  }

  ngOnInit(): void {}

  // Submit the form to update nameservers
  onSubmit(): void {
    if (this.nameserversForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const { domain, ns1, ns2, ns3, ns4, ns5 } = this.nameserversForm.value;
    const nameservers = { ns1, ns2, ns3, ns4, ns5 };

    this.domainsService.updateNameservers(domain, nameservers).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.successMessage = 'Nameservers updated successfully!';
        } else {
          this.errorMessage = 'Failed to update nameservers: ' + response.message;
        }
        this.loading = false;
        this.nameserversForm.reset();
      },
      (error) => {
        console.error('Error updating nameservers:', error);
        this.errorMessage = 'An error occurred during the update.';
        this.loading = false;
      }
    );
  }
}
