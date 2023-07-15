import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayFeedbackComponent } from './display-feedback/display-feedback.component';
import { SendFeedbackComponent } from './send-feedback/send-feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';



@NgModule({
  declarations: [
    DisplayFeedbackComponent,
    SendFeedbackComponent,
    FeedbackComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FeedbackRoutingModule,
    RouterModule,
  ]
})
export class FeedbackModule { }
