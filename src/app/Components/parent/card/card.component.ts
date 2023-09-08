import { Component, Input } from '@angular/core';
import { Productinterface } from 'src/models/productinterface';
import { CartService } from '../../Services/cart.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() onerecord!:Productinterface;

  constructor(private cartservices:CartService){}

  addtocartservice(pid:number){
    console.log(pid);
    this.cartservices.inserttocard(pid);
  }

}
