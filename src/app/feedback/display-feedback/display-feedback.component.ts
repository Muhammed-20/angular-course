import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-feedback',
  templateUrl: './display-feedback.component.html',
  styleUrls: ['./display-feedback.component.css']
})
export class DisplayFeedbackComponent implements OnInit {
  
  ngOnInit(): void {
    this.checkClick();
  }

  parsedFeedbackValues: any[] = [];

  checkClick() {  // Bu fonksiyon ile local storage'deki veriyi dönüyoruz. ilerleyen zamanda bu fonksiyonu veriyi tabloya dökmek için kullanacağız!!
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
