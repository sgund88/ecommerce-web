import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { AlertMessage } from '../model/alertmessage.model';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  basic_url = "https://fakestoreapi.com";
  loader = new BehaviorSubject<Boolean>(false);
  alertBox = new BehaviorSubject<AlertMessage>({active:false, message: "", status: ""});
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    this.loader.next(true);
    return this.http.get<Product[]>(`${this.basic_url}/products`);
  }

  getProduct(id: number):  Observable<Product> {
    this.loader.next(true);
    return this.http.get<Product>(`${this.basic_url}/products/${id}`);
  }
}
