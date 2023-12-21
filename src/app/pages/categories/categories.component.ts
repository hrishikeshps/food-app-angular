import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: any = [];

  constructor(private mainSrv: MainService){

  }

  ngOnInit(): void {
    this.fetchAllCategories();
  }

  fetchAllCategories(){
    this.mainSrv.getAllCategories()
      .pipe(map((item: any) => {
        // Check if categoryName is a string, and update it if needed
        if (typeof item.categoryName === 'string') {
          // Assuming you want to remove the string, you can set it to an empty string or null
          item.categoryName = 'sd';
        }
        return item;
      }))
      .subscribe((res: any) => {
      console.log(res);
      this.categories = res.data;
    });
  }

}
