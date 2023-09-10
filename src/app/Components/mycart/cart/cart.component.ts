import { Component, OnInit } from '@angular/core';
import {CartService} from '../../Services/cart.service'
import { ErrorEnum,Productinterface } from 'src/models/productinterface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  mycart?:Productinterface[]=[] || null;
  totalprice:number=0;


  constructor(private cartservice:CartService){
  }

  ngOnInit(): void {
    if(this.cartservice.getmycart())
      this.mycart=this.cartservice.getmycart();
      this.mycart?.forEach((elem=>{
        this.totalprice+=elem.price*elem.quantity;
      }))
  }

  deleteproductfromcart(pid:number){
    this.mycart?.forEach((elem)=>{
      if(elem.id==pid){
        this.totalprice-=elem.price;
      }
    })
    this.cartservice.deleteproductcart(pid);
  }


  increaseprice(product:Productinterface){
    if(product.quantity >= product.stock ){
      product.quantitiyerror=1;
    }
    else{
      this.totalprice+=product.price;
      product.quantity++;
      product.quantitiyerror=0;

    }

  }

  decreaseprice(product:Productinterface){
    if(product.quantity <= 0 ){
      product.quantitiyerror=-1;
    }
    else{
      this.totalprice-=product.price;
      product.quantity--;
      product.quantitiyerror=0;

    }

  }


  clearcart(){
    this.cartservice.deletecart();
    this.mycart=[];
  }


}
