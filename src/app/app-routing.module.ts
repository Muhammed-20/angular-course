import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: (): any => import('./auth/auth.module').then((m: any) => m.AuthModule),
  },

  {
    path: 'feedback',
    loadChildren: (): any => import('./feedback/feedback.module').then((m: any) => m.FeedbackModule),
  },

  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  
  {
    path: 'main',
    loadChildren: (): any => import('./main/main.module').then((m: any) => m.MainModule),
   /*  canActivate: [AuthGuard] */
  },

  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
