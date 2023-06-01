import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trCurrency',
})
export class TrcurrencyPipe implements PipeTransform {

  transform(value:string,type:any) :string {    //return type' ta string olarak dönecek. 

    return value + ' ' + type;

  }

}
