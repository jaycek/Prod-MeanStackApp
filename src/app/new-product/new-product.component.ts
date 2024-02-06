import { Component } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
title:String = "Add Product";
constructor(private productService:ProductsServiceService,
          private  router:Router){
          }

productItem = new ProductModel(0,'','','','',0,0,'')

addProduct()
{
  this.productService.addProduct(this.productItem);
  alert("Success");
  this.router.navigate(["/"]);
}



}
