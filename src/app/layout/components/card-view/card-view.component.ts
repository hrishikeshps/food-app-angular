import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {
  @Input() cardData: any;

  constructor(){

  }
  
  ngOnInit(){
    console.log(this.cardData);
    
  }

}
