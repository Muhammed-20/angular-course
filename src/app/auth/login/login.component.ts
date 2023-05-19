import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private snack:MatSnackBar
  ) 
  {

  }
  
  clickLogin(): void {
    this.snack.open('Başarılı bir şeklide giriş yapıldı.','kapat',{
      duration:3000,
      
    })
    this.router.navigate(['/main/main-page']);
  }

}
