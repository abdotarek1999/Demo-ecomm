import { Component, OnInit } from '@angular/core';
import {CartService} from '../../Services/cart.service'
import { Productinterface } from 'src/models/productinterface';

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
        this.totalprice+=elem.price;
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

  clearcart(){
    this.cartservice.deletecart();
    this.mycart=[];
  }


}
