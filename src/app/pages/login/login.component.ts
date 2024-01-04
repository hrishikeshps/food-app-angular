import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginObj: any = {
    userName: "",
    password: ""
  }

  constructor(private mainSrv: MainService){

  }

  onLogin(){
    this.mainSrv.login(this.loginObj).subscribe((res: any)=> {
      
    })
  }
}
