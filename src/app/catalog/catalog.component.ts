import { Component, OnInit } from '@angular/core';
import { Card, CARD_LIST, CARD_TYPES, DEFAULT_TYPE } from '../card';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public list:Card[] = [];
  public types:any[] = [];
  public currentType:string = DEFAULT_TYPE;

  constructor(){
    this.list = CARD_LIST;
    this.types = CARD_TYPES;
    
  }

  ngOnInit(): void {
  }

}
