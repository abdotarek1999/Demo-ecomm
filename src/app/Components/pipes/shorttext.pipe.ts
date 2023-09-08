import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorttext'
})
export class ShorttextPipe implements PipeTransform {

  transform(value: string,characters:number=20): string | null {
      if(value){
        return `${value.substring(0,characters)}...`;
      }
      return null;
  }

}
