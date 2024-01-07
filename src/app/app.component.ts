import { Component } from '@angular/core';
import { GLobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-app-angular';

  constructor(private globalSrv: GLobalService){
    globalSrv.checkUser();
  }
}
