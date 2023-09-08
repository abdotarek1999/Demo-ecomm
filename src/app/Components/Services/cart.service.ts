import { Injectable, OnInit } from '@angular/core';
import { Productinterface } from 'src/models/productinterface';
import {BehaviorSubject, Observable} from "rxjs";
import {HandleproductService } from './handleproduct.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Productinterface[]=[];
  private counter=new BehaviorSubject<number>(0);


  constructor(private handle:HandleproductService) {
    this.cart=JSON.parse(localStorage.getItem("cart")!)  || [];
    this.counter.next(Number(localStorage.getItem("cartlength")));
    console.log(this.cart);
  }

  getmycart(){
    return this.cart;
  }

  inserttocard(pid:number){
   this.handle.getproductdetails(pid).subscribe(prod=>{
      this.cart.push(prod);
      localStorage.setItem("cart",JSON.stringify(this.cart));
      this.setLength();
    });
  }

  setLength(){
    this.counter.next(this.cart.length);
    localStorage.setItem("cartlength",JSON.stringify(this.cart.length));

  }

  getlength(){
    return this.counter.asObservable();
  }


  deleteproductcart(pid:number){
    const index = this.cart.map(object => object.id).indexOf(pid);
    this.cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(this.cart));
    this.setLength()
    //console.log(index)
  }

  deletecart(){
    localStorage.removeItem("cart");
    this.cart=[];
    this.setLength();
  }


}
