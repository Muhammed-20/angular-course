import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forgot-passsword',
  templateUrl: './forgot-passsword.component.html',
  styleUrls: ['./forgot-passsword.component.css']
})
export class ForgotPassswordComponent {
  public users:Array<any> = [];
  public value:string = "";
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
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }

  sendMail() {
    this.users.forEach((user) => {
      console.log(user.mail,this.loginForm.get(['email'])?.value)
     if(user.mail ==  this.loginForm.get(['email'])?.value) {
         this.value = user.password
         console.log(user.password)
     }
    })
  }
}
