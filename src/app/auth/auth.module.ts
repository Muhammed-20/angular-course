import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ForgotPassswordComponent } from './forgot-passsword/forgot-passsword.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    AuthComponent,
    ForgotPassswordComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class AuthModule { }
