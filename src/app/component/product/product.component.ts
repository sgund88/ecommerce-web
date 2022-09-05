import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/service/cart.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  id: any;

  constructor(private router: Router, private _Activatedroute: ActivatedRoute, private _productService: ProductServiceService, private cartService: CartService) {
  }

  sub: any;
  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this._productService.getProduct(this.id).subscribe(res => {
        this.product = res;
        Object.assign(this.product, { quantity: 1, total: this.product.price });
      })
    });
  }

    addtocart(item: any) {
      this.cartService.addtoCart(item);
    }

    removeToCart(item: any) {
      this.cartService.removeCartItem(item);
      alert("product successfully removed")
    }

    checkProductCart(item: any) {
      if (this.cartService.getProductExistOrNot(item) != 0) {
        return true;
      } else {
        return false;
      }
    }
  }
