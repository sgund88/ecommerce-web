import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductServiceService } from 'src/app/service/product-service.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [NgbRatingConfig]
})

export class ProductListComponent implements OnInit {
  products: any;
  constructor(private productService: ProductServiceService, private cartService: CartService, config: NgbRatingConfig) {
    config.max = 5.0;
    config.readonly = true;
    this.getList();
  }

  ngOnInit(): void {
  }

  getList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
    return this.products;
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  removeToCart(item: any) {
    this.cartService.removeCartItem(item);
  }

  checkProductCart(item: any) {
    if (this.cartService.getProductExistOrNot(item) != 0) {
      return true;
    } else {
      return false;
    }
  }
}
