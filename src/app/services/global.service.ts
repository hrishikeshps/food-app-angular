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

}
