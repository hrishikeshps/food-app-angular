import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private mainSrv: MainService, private router: Router){

  }

  onLogin(){
    this.mainSrv.login(this.loginObj).subscribe((res: any)=> {
      console.log(res);
      if(res.result){
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        this.router.navigate(['food-category']);
      } else {
        alert('Wrong username/password');
      }
    })
  }
}
