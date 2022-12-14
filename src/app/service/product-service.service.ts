import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  basic_url = "https://fakestoreapi.com";
  loader = new BehaviorSubject<Boolean>(true);
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.basic_url}/products`);
  }

  getProduct(id: number):  Observable<Product> {
    return this.http.get<Product>(`${this.basic_url}/products/${id}`);
  }
}
