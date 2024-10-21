import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/layout/cart.service';
import { ProductsService } from 'src/app/orders/services/products.service';  // Import the ProductsService

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  totalAmount: number = 0;
  productSuggestions: any[] = [];  // To store product suggestions

  constructor(
    private cartService: CartService,
    private productsService: ProductsService  // Inject the ProductsService
  ) { }

  ngOnInit(): void {
    // Load cart items on initialization
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();

    // Fetch product suggestions from the ProductsService
    this.productsService.getProducts().subscribe((response: any) => {
      if (response.result === 'success') {
        this.productSuggestions = response.products;  // Assuming 'products' is the key in the response
      }
    });
  }

  // Calculate the total price of the cart
  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
  }

  // Remove a domain from the cart
  removeFromCart(domain: string) {
    this.cartItems = this.cartItems.filter(item => item.domain !== domain);
    this.cartService.updateCart(this.cartItems);  // Update the cart in the service
    this.calculateTotal();  // Recalculate total after removal
  }

  // Add a product suggestion to the cart
  addProductToCart(product: any) {
    this.cartService.addDomainToCart(product);  // Add product to cart
    this.cartItems = this.cartService.getCart();  // Refresh cart items
    this.calculateTotal();  // Recalculate the total
  }

  // Proceed to checkout (this can be extended to include payment)
  proceedToCheckout() {
    alert('Proceeding to checkout. Total amount: ' + this.totalAmount + ' DH');
    // Logic for payment can go here
  }
}
