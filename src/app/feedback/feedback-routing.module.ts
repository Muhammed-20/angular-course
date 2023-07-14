import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayFeedbackComponent } from './display-feedback/display-feedback.component';
import { SendFeedbackComponent } from './send-feedback/send-feedback.component';

const routes: Routes = [
  {
    path: '', component: SendFeedbackComponent,
    children: [
      { path: 'display', component: DisplayFeedbackComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
