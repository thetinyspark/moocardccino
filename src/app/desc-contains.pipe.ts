import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './card';

@Pipe({
  name: 'descContains'
})
export class DescContainsPipe implements PipeTransform {

  transform(cards:Card[], search:string): Card[] {
    return cards.filter( 
      (current:Card) => {
        return current.desc.toLowerCase().includes(search.toLowerCase());
      }
    );
  }

}
