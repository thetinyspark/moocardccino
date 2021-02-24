import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public list:Card[] = [];

  constructor(){
    this.list.push( 
      {
        id: 1,
        name:"Dragon blanc aux yeux bleus", 
        desc: "Il est puissant", 
        cost: 9, 
        atk: 9, 
        def: 9, 
        price: 1600, 
        img: "/assets/dragon.jpg"
      } , 
      {
        id: 2,
        name:"Genie de la lampe", 
        desc: "Je suis, ton meillleuuuurrrrrr amiiiiii.", 
        cost: 8, 
        atk: 8, 
        def: 8, 
        price: 1600, 
        img: "/assets/genie.png"
      } 
    );
  }
}
