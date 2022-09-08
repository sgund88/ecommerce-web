import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductServiceService } from './product-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private productService: ProductServiceService) { }
  getProducts() {
    return this.productList.asObservable();
  }

  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.productService.alertBox.next({ active: true, message: "product successfully added to the cart!!!", status: "success" });
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return Math.round(grandTotal * 100) / 100;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
    this.productService.alertBox.next({ active: true, message: "product successfully removed from the cart.", status: "danger" });
  }

  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    this.productService.alertBox.next({ active: true, message: "All product successfully removed from the cart.", status: "danger" });
  }

  setQuantity(action: string, item: any) {
    if (action === "+") {
      this.cartItemList.map((a: any, index: any) => {
        if (item.id === a.id) {
          item.quantity = item.quantity + 1;
          if (item.quantity == 2) {
            item.total = item.total * item.quantity;
          } else {
            item.total = (item.total / (item.quantity - 1)) * item.quantity;
          }
          this.cartItemList[index] = item;
        }
      });
    } else if (action === "-") {
      this.cartItemList.map((a: any, index: any) => {
        if (item.id === a.id && (1 <= item.quantity)) {
          if (item.quantity != 1) {
            item.quantity = item.quantity - 1;
            item.total = (item.total / (item.quantity + 1)) * item.quantity;
          }
          this.cartItemList[index] = item;
        }
      });
    }
  }

  getProductExistOrNot(product: any): number {
    let i: number = 0;
    this.cartItemList.map((a: any, index: any) => {
      if (a.id === product.id) {
        i = index + 1;
      }
    });
    return i;
  }
}
