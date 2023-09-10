import { Injectable, OnInit } from '@angular/core';
import { ErrorEnum, Productinterface } from 'src/models/productinterface';
import {BehaviorSubject, Observable} from "rxjs";
import {HandleproductService } from './handleproduct.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Productinterface[]=[{
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
    createdAt:'',
    quantity:0,
    quantitiyerror:0
  }];
  private counter=new BehaviorSubject<number>(0);


  constructor(private handle:HandleproductService) {
    this.cart=JSON.parse(localStorage.getItem("cart")!)  || [];
    console.log(this.cart);
    this.counter.next(Number(localStorage.getItem("cartlength")));
    console.log(this.cart);
  }

  getmycart(){
    return this.cart;
  }

  inserttocard(pid:number){
    let flag=0;
    this.cart.find(prod=>{
      if(prod.id === pid){
        prod.quantity++;
        flag=1;
      }
    });

    if(!flag){
      this.handle.getproductdetails(pid).subscribe(prod=>{
        prod.quantity = 1;
        prod.quantitiyerror=0;

        this.cart.push(prod);
        localStorage.setItem("cart",JSON.stringify(this.cart));
        this.setLength();
      });
    }

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
