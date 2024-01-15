import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GLobalService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {

  }

  updateUserLogged(nextValue: boolean){
    this.isUserLoggedIn.next(nextValue);
  }

  setUser(user: any){
    localStorage.setItem('userInfo', JSON.stringify(user));
    this.updateUserLogged(true);
  }

  checkUser(){
    let userInfo: any = localStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo)
    if(userInfo && userInfo.role){
      this.updateUserLogged(true);
    } else {
      this.updateUserLogged(false);
    }
  }

  clearUser(){
    localStorage.removeItem('userInfo');
    this.updateUserLogged(false);
  }

}
