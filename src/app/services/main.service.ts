import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  public itemsArr: any[] = [];

  constructor(private http: HttpClient) { }

  login(data: any){
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/Login", data)
  }

  getAllCategories(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory");
  }

  getFoodItemsByCategoryName(name: number){
    return this.http.get(`https://freeapi.miniprojectideas.com/api/zomato/GetRestaurantServingByCategoryId?categoryId=${name}`);
  }
}
