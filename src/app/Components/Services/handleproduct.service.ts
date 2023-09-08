import { Injectable } from '@angular/core';
import datajson from '../../../assets/products-list.json';
import { Productinterface } from 'src/models/productinterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HandleproductService {
  //data:Productinterface[]=[];


  constructor(private httpclient:HttpClient){
    //this.data=datajson;
  }



  getallproduct() :Observable<any>{
    return this.httpclient.get("https://dummyjson.com/products");

  }

  getproductdetails(pid:number) :Observable<Productinterface>{
    return this.httpclient.get<Productinterface>(`https://dummyjson.com/products/${pid}`);

  }

  searchofproduct(keyword:string):Observable<any>{
    return this.httpclient.get<Productinterface[]>(`https://dummyjson.com/products/search?q=${keyword}`);

  }
}
