import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/layout/cart.service';  // Import CartService
import { Subscription } from 'rxjs';  // Import Subscription to manage observable

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  curentsection: any = 'home';
  cartItemCount: number = 0;  // To store cart item count
  cartItems: any[] = [];  // To store the cart items
  cartSubscription:  Subscription = new Subscription();  // To manage the subscription to cart changes

  constructor(private renderer: Renderer2, private cartService: CartService) { }

  ngOnInit(): void {
    const preloaderElement = document.getElementById('preloader');
    if (preloaderElement) {
      this.renderer.removeClass(preloaderElement, 'd-none');
    }
    setTimeout(() => {
      this.renderer.addClass(preloaderElement, 'd-none');
    }, 1000);

    // Subscribe to cart changes
    this.cartSubscription = this.cartService.getCartObservable().subscribe(cart => {
      this.cartItems = cart;
      this.cartItemCount = cart.length;
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from cart updates to avoid memory leaks
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  // Handle section change based on scroll
  onSectionChange(event: any) {
    this.curentsection = event;
  }

  // Handle window scroll event
  windoscroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('nav-sticky');
      document.getElementById('back-to-top')!.style.display = 'block';
    } else {
      navbar?.classList.remove('nav-sticky');
      document.getElementById('back-to-top')!.style.display = 'none';
    }
  }

  // Toggle the menu for mobile view
  toggleMenu() {
    document.getElementById('navbarSupportedContent')!.classList.toggle('show');
  }
}
