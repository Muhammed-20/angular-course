import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-send-feedback',
  templateUrl: './send-feedback.component.html',
  styleUrls: ['./send-feedback.component.css']
})
export class SendFeedbackComponent {

  public feedbackForm = new FormGroup({   // deneme sırasında sürekli form doldurmamak için şimdilik değer atadım işin bitince silmeyi unutma
    name: new FormControl('Yasin', Validators.required),
    surname: new FormControl('Seden', Validators.required),
    comment: new FormControl(),
    email: new FormControl('yasinseden@yasin.com', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(),
    gender: new FormControl('male', [Validators.required]),
    reference: new FormControl('')   // referans çıktısı sayı olarak olacak. Kullanırken dönen sayının karşılığı değeri döndürmeyi unutma
  })

  constructor(
    public router: Router
  ) {}

  parsedFeedbackValues: any[] = [];
  valueKey: number = 1;    // şimdilik geçici bir çözüm olarak bir değişkenle localstorage keylerini kontrol altına aldım. Daha verimli bir yolunu araştır

  get f(): { [key: string]: AbstractControl } {
    return this.feedbackForm.controls
  }

  submitfeedback() {  // Kontrol amaçlı console.log ekledim. İşin bitince silmeyi unutma
    const formValues = this.feedbackForm.value;
    const key = this.valueKey.toString();
    window.localStorage.setItem(key, JSON.stringify(formValues));
    this.valueKey++
  }

  checkClick() {  // Bu fonksiyon ile local storage'deki veriyi dönüyoruz. ilerleyen zamanda bu fonksiyonu veriyi tabloya dökmek için kullanacağız!!
    let valueKey: any;
    for (let i = 1; i < 100; i++) {  // for döngüsüyle localstorage'deki veriyi döndürebiliyorum fakat şimdilik döngü 100'e kadar dönüyor. storage'daki veri sayısına göre dönmeyi öğren!!!
      valueKey = i.toString();
      const storedFeedbackValues = localStorage.getItem(valueKey)
      if (storedFeedbackValues) {
        this.parsedFeedbackValues.push(JSON.parse(storedFeedbackValues));
      }
    }
  }

  navigateToFeedbackDisplay() {
    this.router.navigate(['/feedback/display']);
  }
}
