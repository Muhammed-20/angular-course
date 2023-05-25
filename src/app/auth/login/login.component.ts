import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public users:Array<any> = [];
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(
    private router: Router,
    private snack:MatSnackBar,
    private auth:AuthService
  ) 
  { 
    this.auth.getUsers().subscribe((data) => {
      this.users = data
      console.log(this.users)
    })
  }



  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }
  
  clickLogin(): void {
    this.users.forEach((user) => {

      if((user.mail == this.loginForm.get(['email'])?.value) && user.password == this.loginForm.get(['password'])?.value) {
        this.snack.open('Başarılı bir şeklide giriş yapıldı.','kapat',{
          duration:3000,
          
        })
        this.router.navigate(['/main/main-page']); 

      } else {
        this.snack.open('Mail ve şifrenizi tekrar kontrol ediniz.','kapat',{
          duration:3000,
          
        })
      }
 
    })
    
  }

}
