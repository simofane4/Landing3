import { Component, OnInit } from '@angular/core';
import { DomainsService } from '../domains.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-or-update-tld',
  templateUrl: './create-or-update-tld.component.html',
  styleUrls: ['./create-or-update-tld.component.scss']
})
export class CreateOrUpdateTldComponent implements OnInit {
  tldForm: FormGroup;
  isUpdate: boolean = false;
  loading: boolean = false;
  message: string = '';

  constructor(
    private domainsService: DomainsService,
    private fb: FormBuilder
  ) {
    // Initialize form with FormBuilder
    this.tldForm = this.fb.group({
      tld: ['', [Validators.required]],
      registrar: ['', [Validators.required]],
      dnsManagement: [false],
      emailForwarding: [false],
      idProtection: [false],
      renewalPrice: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
    });
  }

  ngOnInit(): void {
    // Optionally, populate form if updating an existing TLD
  }

  // Submit the form to create or update a TLD
  onSubmit(): void {
    if (this.tldForm.invalid) {
      this.message = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    const tldData = this.tldForm.value;

    if (this.isUpdate) {
      this.updateTld(tldData);
    } else {
      this.createTld(tldData);
    }
  }

  // Create a new TLD
  private createTld(tldData: any): void {
    this.domainsService.addTld(tldData).subscribe(
      (response) => {
        this.message = 'TLD created successfully!';
        this.loading = false;
        this.tldForm.reset();
      },
      (error) => {
        console.error('Error creating TLD:', error);
        this.message = 'Failed to create TLD.';
        this.loading = false;
      }
    );
  }

  // Update an existing TLD
  private updateTld(tldData: any): void {
    this.domainsService.updateTld(tldData).subscribe(
      (response) => {
        this.message = 'TLD updated successfully!';
        this.loading = false;
        this.tldForm.reset();
      },
      (error) => {
        console.error('Error updating TLD:', error);
        this.message = 'Failed to update TLD.';
        this.loading = false;
      }
    );
  }
}
