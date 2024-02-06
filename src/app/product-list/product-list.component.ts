import { Component } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductsServiceService } from '../products-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

title:String = "Product List";
imageWidth:number = 50;
imageMargin:number = 2;

products:ProductModel[];
constructor(private productService:ProductsServiceService){
  this.products=[];
}

ngOnInit():void{
  this.productService.getProducts().subscribe((data)=>{
    this.products = JSON.parse(JSON.stringify(data));
    console.log(this.products);
  })
}
}
