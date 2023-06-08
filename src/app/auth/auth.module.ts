import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ForgotPassswordComponent } from './forgot-passsword/forgot-passsword.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';



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
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AuthModule { }
