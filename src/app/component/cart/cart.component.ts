import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [NgbRatingConfig]
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal !: number;

  constructor(private cartService: CartService, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }

  setQuantity(action: string, item: any) {
    this.cartService.setQuantity(action, item);
    this.grandTotal = this.cartService.getTotalPrice();
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }

  getTotalRoundOf(amount: number): number {
    return Math.round(amount * 100) / 100
  }
}
