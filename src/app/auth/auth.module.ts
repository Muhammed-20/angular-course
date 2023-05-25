import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ForgotPassswordComponent } from './forgot-passsword/forgot-passsword.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material/material.module';
import { MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';



@NgModule({
  declarations: [
    AuthComponent,
    ForgotPassswordComponent,
    LoginComponent,
    CreateAccountComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
