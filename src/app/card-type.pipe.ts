import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './card';

@Pipe({
  name: 'cardType'
})
export class CardTypePipe implements PipeTransform {

  transform(cards: Card[], type:string = ""): Card[] {

    // type "spécial", qui nous permet d'avoir l'ensemble des cartes 
    // visibles quel que soit leur type.
    if( type === "")
      return cards;

    const results:Card[] = cards.filter( 
      (value:Card) => {
        return value.type.includes(type);
      }
    );

    return results;
  }

}
