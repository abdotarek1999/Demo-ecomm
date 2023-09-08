import { Component, OnInit } from '@angular/core';
import { Productinterface } from 'src/models/productinterface';
import { HandleproductService } from '../Services/handleproduct.service';
import {CartService} from '../Services/cart.service'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
  data:Productinterface[]=[];

  constructor(private handle: HandleproductService ,
              private cartservice:CartService
    ){
  }

  ngOnInit(): void {
   //this.handle.getallproduct(); first use when i import json file
   this.handle.getallproduct().subscribe({
    next:(prod)=>{
      this.data=prod.products;
    }
    });
  }


  searchaboutproduct(keyword:string){
    this.handle.searchofproduct(keyword).subscribe({
      next:(prod)=>{
        this.data=prod.products;
      }
      });
  }

  seedata(){
    console.log(this.data);
  }

}
