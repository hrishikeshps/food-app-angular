import { Component } from '@angular/core';
import { GLobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

  public isUserLogged: boolean = false;

  constructor(private globalSrv: GLobalService){

  }
  
  ngOnInit(){
    this.globalSrv.isUserLoggedIn.subscribe((val: boolean) => {
      this.isUserLogged = val;
    })
  }
}
