import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public data:Card|null = null; 

  @Input()
  public flipped:boolean = false;

  @Input()
  public zoom:number = 1;

  public cardStyle:any ={};
  public imgStyle:any = {};

  constructor() { }

  toggleFlip(){
    this.flipped = !this.flipped;
  }

  ngOnInit(): void {
    
    this.cardStyle = {
      'zoom': this.zoom
    }; 

    this.imgStyle = {
      'background-image': 'url('+this.data?.img+')'
    };
  }

}
