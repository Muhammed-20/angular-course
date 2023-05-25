import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  constructor(
    private router: Router,
    private snack:MatSnackBar,
    private auth:AuthService
  ) 
  { 
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }
  
  createAccount(): void {
    const createAccount:Object = {
      mail:this.loginForm.get(['email'])?.value,
      password:this.loginForm.get(['password'])?.value,
    }

    this.auth.postUsers(createAccount).subscribe((data) => {
      this.snack.open('Başarılı bir şeklide kayıt yapıldı','kapat',{
        duration:3000,
      })
    },(err) => {
      this.snack.open('Başarısız kayıt tekrar deneyiniz.','kapat',{
        duration:3000,
      })
    })


     this.router.navigate(['/auth/login']); 
  }
}
