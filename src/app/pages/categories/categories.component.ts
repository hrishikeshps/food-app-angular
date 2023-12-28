import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: any = [];

  constructor(private mainSrv: MainService, private router: Router){

  }

  ngOnInit(): void {
    this.fetchAllCategories();
  }

  fetchAllCategories(){
    this.mainSrv.getAllCategories()
      .subscribe((res: any) => {
        this.categories = res.data.filter((item: any) => item.categoryName != 'string');
    });
  }

  openDetail(id: number){
    this.router.navigate([`/restaurant-items`, id])
  }

}
