import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
    private auth:AuthService,
    public translateService: TranslateService
  ) 
  { 

    this.translateService.addLangs(["tr", "en"]);
    this.auth.getUsers().subscribe((data) => {
      this.users = data
      console.log(this.users)
    })
  }

  public onChange(selectedLanguage: string): void {
    this.translateService.use(selectedLanguage)
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }
  
  clickLogin(): void {
    let succes;
    let fail;
    this.users.forEach((user) => {
    
      if((user.mail == this.loginForm.get(['email'])?.value) && user.password == this.loginForm.get(['password'])?.value) {
        this.snack.open('Başarılı bir şeklide giriş yapıldı.','kapat',{
          duration:3000,
          
        })
        succes = new SpeechSynthesisUtterance('Başarılı bir şeklide giriş yapıldı');
        succes.lang = 'tr';
        speechSynthesis.speak(succes);
        this.router.navigate(['/main/main-page']); 

      } else {
        this.snack.open('Mail ve şifrenizi tekrar kontrol ediniz.','kapat',{

          duration:3000,
          
        })
      }
 
    })
    
  }

}
