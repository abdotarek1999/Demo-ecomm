import { Component, OnInit } from '@angular/core';
import { Productinterface } from 'src/models/productinterface';
import { HandleproductService } from '../Services/handleproduct.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
  data:Productinterface[]=[];

  constructor(private handle: HandleproductService ,
              private spinner: NgxSpinnerService
    ){
  }

  ngOnInit(): void {
   //this.handle.getallproduct(); first use when i import json file
   this.spinner.show();
   setTimeout(() => {
    this.spinner.hide();
  }, 500);
   this.handle.getallproduct().subscribe({
    next:(prod)=>{
      this.data=prod.products;

    },
    error:(error) => {
      console.error('Error fetching products:', error);
    },
    complete:()=>{
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
