import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {



  constructor(private sanitized: DomSanitizer){

  }

  transform(value: number):SafeHtml {
    let element:any;
    if(value == 0){
      element=`<span class='text-danger'>out of stock</span>`;
    }
    else{
      element=`<span class='text-success'>in stock</span>`;
    }
    return this.sanitized.bypassSecurityTrustHtml(element);
  }

}
