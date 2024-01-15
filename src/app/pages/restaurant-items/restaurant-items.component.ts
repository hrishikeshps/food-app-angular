import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-restaurant-items',
  templateUrl: './restaurant-items.component.html', 
  styleUrls: ['./restaurant-items.component.scss']
})
export class RestaurantItemsComponent {
  public allRestaurants: any[] = [];
  public categoryTitle: string = '';
  public quantity: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private mainSrv: MainService){
    this.activatedRoute.params.subscribe((res: any) => {
      console.log(res.categoryId);
      this.fetchFoodItemsByCat(res.categoryId);

    })
  }

  fetchFoodItemsByCat(id: number) {
    this.mainSrv.getFoodItemsByCategoryName(id).subscribe((res:any) => {
      console.log(res)
      this.allRestaurants = res.data;
      this.categoryTitle = res.data && res.data.length > 0 ? res.data[0].categoryName : '';
    })
  }

  selectedItemEmit(e: any){
    console.log(e);
    const modal = document.getElementById('myModal');
    if(modal != null){
      modal.style.display = 'block';
    }
  }

  closeModal(){
    const modal = document.getElementById('myModal');
    if(modal != null){
      modal.style.display = 'none';
    }
  }

  updateQty(){
    console.log('update qty now -->')
  }
}
