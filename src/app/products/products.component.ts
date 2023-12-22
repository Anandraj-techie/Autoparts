import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
 
 public productList: any;
  constructor(
    private route: ActivatedRoute,
    private api:ApiService,
   
    private cartService: CartService
  ) { }

  ngOnInit():void{
    this.api.getProduct()
    .subscribe(res=>{
      console.log(res);
      this.productList=res;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }

  addtoCart(item: any) {
    this.cartService.addtoCart(item);
    window.alert('Your product has been added to the cart!');
  }
}

  

