import { Component , OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.scss'
})
export class GetProductsComponent implements OnInit {
  products: any[] = [];
  jsonResponse:any[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (response: any) => {
        console.log(response.products.product);
        this.products = response.products.product;
        this.jsonResponse = response;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
