import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-display-feedback',
  templateUrl: './display-feedback.component.html',
  styleUrls: ['./display-feedback.component.css']
})
export class DisplayFeedbackComponent implements OnInit {
  
  // Constructor'a svg'yi eklememe rağmen neden kullanılamadığını öğren
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'male-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets\svgs\gender-male-svgrepo-com.svg')
    );
  }

  ngOnInit(): void {
    this.checkClick();
  }

  parsedFeedbackValues: any[] = [];

  checkClick() {
    let valueKey: any;
    for (let i = 1; i < 100; i++) {  // for döngüsüyle localstorage'deki veriyi döndürebiliyorum fakat şimdilik döngü 100'e kadar dönüyor. storage'daki veri sayısına göre dönmeyi öğren!!!
      valueKey = i.toString();
      const storedFeedbackValues = localStorage.getItem(valueKey)
      if (storedFeedbackValues) {
        const retrievedValue = JSON.parse(storedFeedbackValues);
        this.parsedFeedbackValues.push(retrievedValue)
      }
    }
  }
}
