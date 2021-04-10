import { Component, OnInit } from '@angular/core';
import { Card, CARD_LIST, CARD_TYPES, DEFAULT_TYPE } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public list:Card[] = [];
  public types:any[] = [];
  public currentType:string = DEFAULT_TYPE;
  public currentName:string = "";
  public currentDesc:string = "";

  constructor( private cardService:CardService ){
  }

  ngOnInit(): void {
    this.cardService.getAll().subscribe( 
      ( cards:Card[]) => {
        this.list = cards;
      }
    );

    this.cardService.getTypes().subscribe( 
      (types:any[]) => {
        this.types = types;
      }
    );
    
    this.cardService.getDefaultType().subscribe( 
      (type:string) => {
        this.currentType = type;
      }
    );
  }

}
