import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  private url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient){};

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}/products`);
  }
  
  getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/products/${id}`);
  }
}