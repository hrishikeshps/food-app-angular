import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-items',
  templateUrl: './restaurant-items.component.html',
  styleUrls: ['./restaurant-items.component.scss']
})
export class RestaurantItemsComponent {
  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe((res: any) => {
      console.log(res)
    })
  }
}
