import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HandleproductService } from 'src/app/Components/Services/handleproduct.service';
import { Productinterface } from 'src/models/productinterface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  pid?:number;
  product!:Productinterface[];
  filterproduct?:Productinterface;

  constructor(private activateroute:ActivatedRoute,private handle:HandleproductService){
  }

  ngOnInit(): void {
   this.pid=Number(this.activateroute.snapshot.paramMap.get("pid"));
   //console.log(this.pid);
   //this.handle.getallproduct(); first use when i import json file
   /*
   this.handle.getallproduct().subscribe(pro=>{
    this.product=pro;
   });*/
   /*
   first use of import json
   console.log(this.product.find(prod=>prod.id==this.pid));
   this.filterproduct=this.product.find(prod=>prod.id==this.pid);
   */

   this.handle.getproductdetails(this.pid).subscribe(res=>{
    this.filterproduct=res;
   })
  }

}
