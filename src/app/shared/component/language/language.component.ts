import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  constructor(public translateService: TranslateService) {

    this.translateService.addLangs(["tr", "en"]);
  }
  public onChange(selectedLanguage: string): void {

    this.translateService.use(selectedLanguage)
  }
}
