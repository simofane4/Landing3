import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-clients-products',
  templateUrl: './get-clients-products.component.html',
  styleUrls: ['./get-clients-products.component.scss']
})
export class GetClientsProductsComponent implements OnInit {
  getClientProductsForm: FormGroup;
  loading: boolean = false; // Loading indicator
  clientProducts: any[] = []; // Holds the list of client products
  errorMessage: string = ''; // Error message

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Initialize the form with required fields
    this.getClientProductsForm = this.fb.group({
      clientid: ['', Validators.required] // Client ID is required to fetch the products
    });
  }

  ngOnInit(): void {}

  // Submit the form to fetch client products
  onSubmit(): void {
    if (this.getClientProductsForm.invalid) {
      this.errorMessage = 'Please provide a valid Client ID.';
      return;
    }

    this.loading = true;
    this.clientProducts = [];
    this.errorMessage = '';

    const clientId = this.getClientProductsForm.value.clientid;

    this.clientService.getClientsProducts(clientId).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.clientProducts = response.products || [];
        } else {
          this.errorMessage = 'Failed to retrieve client products: ' + response.message;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching client products:', error);
        this.errorMessage = 'An error occurred while retrieving client products.';
        this.loading = false;
      }
    );
  }
}
