import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GLobalService } from 'src/app/services/global.service';
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

  constructor(private mainSrv: MainService, private globalSrv: GLobalService, private router: Router){

  }

  onLogin(){
    this.mainSrv.login(this.loginObj).subscribe((res: any)=> {
      console.log(res);
      if(res.result){
        this.globalSrv.setUser(res.data);
        this.router.navigate(['food-category']);
      } else {
        alert('Wrong username/password');
      }
    })
  }
}
