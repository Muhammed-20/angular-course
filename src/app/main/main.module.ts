import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { KatalogDirective } from '../shared/directives/katalog.directive';
import { TrcurrencyPipe } from '../shared/pipes/tr-currency.pipe';



@NgModule({
  declarations: [
    MainComponent,
    MainPageComponent,
    MainContentComponent,
    KatalogDirective,
    MainHeaderComponent,
    TrcurrencyPipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MainFooterComponent,
  ]
})
export class MainModule { }
