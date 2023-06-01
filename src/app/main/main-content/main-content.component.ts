import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs';
import { BehaviorSubjectService } from 'src/app/shared/services/behavior-subject.service';
import { ListeleService } from 'src/app/shared/services/listele.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() data:any;
  public items:Array<any>  = [];

  

  public loginForm = new FormGroup({
    itemName: new FormControl('', [Validators.required]),
    itemPrice: new FormControl('', [Validators.required]),
    itemCat: new FormControl('', [Validators.required])
  })

  constructor(private listeleService:ListeleService,private snack:MatSnackBar,public behaviorService:BehaviorSubjectService) {

  }
  ngOnInit(): void {
    this.listeleService.getItems().subscribe((data) => {
      this.items = data
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }
   public listele() {
    const items:Object = {
      itemName:this.loginForm.get(['itemName'])?.value,
      itemPrice:this.loginForm.get(['itemPrice'])?.value,
      itemCat:this.loginForm.get(['itemCat'])?.value
    }
    this.listeleService.postItems(items).subscribe((items) => {
       this.snack.open('Ürün bilgileri başarılı bir şekilde listelenmiştir.','kapat', {
        duration:3000
       });

      this.getList()

      let  succes = new SpeechSynthesisUtterance('Ürün bilgileri başarılı bir şekilde listelenmiştir');
       succes.lang = 'tr';
       speechSynthesis.speak(succes);
    },(err) => {
      this.snack.open('Ürün bilgileri alınamamıştır.','kapat', {
        duration:3000
       });
    })
    this.behaviorService.emitNotification(true);
  }

  getList() {
    this.listeleService.getItems().subscribe((data) => {
      console.log(data);
      this.items = data
    })
  }


}
