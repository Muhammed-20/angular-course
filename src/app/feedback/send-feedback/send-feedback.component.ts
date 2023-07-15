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

  navigateToFeedbackDisplay() {
    this.router.navigate(['/feedback/display']);
  }
}
