import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';  // Optional: if you're using cookies

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);  // Observable for cart items

  constructor(private cookieService: CookieService) {
    const cartCookie = this.cookieService.get('cart');
    if (cartCookie) {
      this.cart = JSON.parse(cartCookie);
    }
    this.cartSubject.next(this.cart);  // Emit the initial cart state
  }

  // Add domain to the cart and notify subscribers
  addDomainToCart(domain: any) {
    this.cart.push(domain);
    this.updateCartCookie();
    this.cartSubject.next(this.cart);  // Emit updated cart
  }

  // Return observable to subscribe to cart changes
  getCartObservable() {
    return this.cartSubject.asObservable();
  }

  // Get cart count
  getCartCount() {
    return this.cart.length;
  }
  // Return the current cart items
  getCart() {
    return this.cart;
  }
 // Update cookies
  updateCart(cartItems: any[]) {
    this.cart = cartItems;
    this.updateCartCookie();  // Update cookies if you are using them
    this.cartSubject.next(this.cart);  // Notify subscribers about the updated cart
  }
  // Clear the cart
  clearCart() {
    this.cart = [];
    this.updateCartCookie();
    this.cartSubject.next(this.cart);  // Emit empty cart
  }

  // Update cookie storage for persistence
  private updateCartCookie() {
    this.cookieService.set('cart', JSON.stringify(this.cart), 1);  // 1-day expiry
  }
}
