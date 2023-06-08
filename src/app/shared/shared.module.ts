import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LanguageComponent } from './component/language/language.component';
import { MaterialModule } from './material/material.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {      /// Eğer başka bir diiznde json tanımlamamk istersek 
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    LanguageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: "tr"
    })
  ],
  exports: [
    LanguageComponent,
    TranslateModule,
    ReactiveFormsModule
  ],
  providers:[TranslateService]
})
export class SharedModule { }
