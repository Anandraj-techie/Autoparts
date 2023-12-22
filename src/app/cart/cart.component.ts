import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

declare var Razorpay:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  myimage:string = "assets/image/home.jpg";

  public products : any = [];
  public grandTotal : number=0;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    if(confirm("are you want  to delete item?"))
    this.cartService.removeCartItem(item);
  alert("deleted successfully");
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  payNow(){

    const RazorpayOptions={
      Description:'sample demo',
      curreny:'INR',
      Amount:30000,
      Name:'Anand',
      key:'rzp_test_pDCVJxwh5ZWzkp',
      
      prefills:{
        name:'anand',
        email:'anandsprink@gmail.com',
        phoneno:85156165156
      },
      theme:{
        color:'#f37254'
      },
      modal:{
        ondismiss:()=>{
          console.log('dismissed')
        }
      }
    }
  const successCallback=(paymentid:any)=>{
    console.log(paymentid);
  }

  const failureCallback=(e:any)=>{
    console.log(e);
  }

  Razorpay.open(RazorpayOptions,successCallback,failureCallback)

}

  }

