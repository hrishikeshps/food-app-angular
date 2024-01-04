import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-view-horizontal',
  templateUrl: './card-view-horizontal.component.html',
  styleUrls: ['./card-view-horizontal.component.scss']
})
export class CardViewHorizontalComponent {
  @Input() cardData: any;
  @Output() selectedItem = new EventEmitter<any>();

  constructor(){

  }

  addItem(){
    this.selectedItem.emit(this.cardData);
  }
  
}
