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
      console.log(res.categoryId);
      this.fetchFoodItemsByCat(res.categoryId);

    })
  }

  fetchFoodItemsByCat(id: number) {
    this.mainSrv.getFoodItemsByCategoryName(id).subscribe((res:any) => {
      console.log(res)
    })
  }
}
