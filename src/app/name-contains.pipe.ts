import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './card';

@Pipe({
  name: 'nameContains'
})
export class NameContainsPipe implements PipeTransform {

  transform(cards:Card[], search:string): Card[] {
    return cards.filter( 
      (current:Card) => {
        return current.name.toLowerCase().includes(search.toLowerCase());
      }
    );
  }

}
