import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    MainPageComponent,
    MainHeaderComponent,
    MainContentComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class MainModule { }
