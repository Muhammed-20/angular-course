import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs';
import { UrunEditModalComponent } from 'src/app/shared/component/modals/urun-edit-modal/urun-edit-modal.component';
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
  public role:any;
  

  public loginForm = new FormGroup({
    itemName: new FormControl('', [Validators.required]),
    itemPrice: new FormControl('', [Validators.required]),
    itemCat: new FormControl('', [Validators.required])
  })

  constructor(
    private listeleService:ListeleService,
    private snack:MatSnackBar,
    public behaviorService:BehaviorSubjectService,
    private dialog:MatDialog
    ) {
      this.role = localStorage.getItem('role');

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
      this.items = data
    })
  }
  public edit(item:any) {
    const dialogRef = this.dialog.open(UrunEditModalComponent, {
      data:item,
      width:'500px',
      height:'350px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getList();
      }
    })
  }

}
