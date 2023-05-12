import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginImage: string = 'assets/angular-login.png';
  loginAltAttr: string = 'login-img'
  loginImageWidth: number = 200;
  loginImageHeight: number = 124;

  loginInputEmailPlaceholder: string = 'Email veya username giriniz...';
  loginPassPlaceholder: string = 'Şifre giriniz...';

  loginBtnName: string = 'Giriş yap';
  forgotPassBtnName: string = 'Şifremi unuttum';

  isVisible: boolean = true;

  isBackGround: boolean = true; 


  constructor(
    private route: Router
    ) {

  }

  forgotPassword() {
    this.route.navigateByUrl('forgot-password');
  }

  getValue(value: any): void {
    console.log("value", value);
    
    value.data == 'a' ? console.log("a tuşuna basıldı") : console.log("farklı bir giriş yapıldı");
  }
}
