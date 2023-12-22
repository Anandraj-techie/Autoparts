import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit 
{
  public totalItem:number=0;
  myimage:string = "assets/image/home.jpg";
  logo:string = "assets/image/logo.png";
  
  constructor(private cartservice:CartService){}

  ngOnInit():void{
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.totalItem=res.length;
    })
  }
}


