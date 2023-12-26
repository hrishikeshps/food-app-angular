import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-restaurant-items',
  templateUrl: './restaurant-items.component.html',
  styleUrls: ['./restaurant-items.component.scss']
})
export class RestaurantItemsComponent {
  constructor(private activatedRoute: ActivatedRoute, private mainSrv: MainService){
    this.activatedRoute.params.subscribe((res: any) => {
      console.log(res.categoryName);
      this.fetchFoodItemsByCat(res.categoryName);

    })
  }

  fetchFoodItemsByCat(name: string) {
    this.mainSrv.getFoodItemsByCategoryName(name).subscribe((res:any) => {
      console.log(res)
    })
  }
}
