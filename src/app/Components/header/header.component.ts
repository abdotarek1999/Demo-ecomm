import { Component, OnInit } from '@angular/core';
import {CartService} from '../Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  counter:number=0;

  constructor(private cartservice:CartService){
  }

  ngOnInit(): void {
    this.cartservice.getlength().subscribe((res)=>{
      this.counter=res;
    });
  }



}
