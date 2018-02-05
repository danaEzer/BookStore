import { Pipe, PipeTransform } from '@angular/core';
import { BookPresentationStructure } from './../../models/books';

@Pipe({
  name: 'keys'
})
// covert json object to array
// If the json contains a null then convert to empty string
export class KeysPipe implements PipeTransform {
  transform(obj: any, args: string): any[] {
    if (!Array.isArray(obj)) {
      if(!args){
        return Object.keys(obj);
      } else if(args === 'book'){
        return Object.keys(BookPresentationStructure);
      }
    } else {
      return obj;
    }
  }
}
