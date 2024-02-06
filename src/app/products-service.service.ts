import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('products')
  }

   addProduct(item:ProductModel){
    console.log(item);
    return this.http.post('insert',{"product":item})
    .subscribe(data=>{console.log(data)})
  }
}
