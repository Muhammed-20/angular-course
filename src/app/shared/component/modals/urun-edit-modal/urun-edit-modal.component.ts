import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListeleService } from 'src/app/shared/services/listele.service';

@Component({
  selector: 'app-urun-edit-modal',
  templateUrl: './urun-edit-modal.component.html',
  styleUrls: ['./urun-edit-modal.component.css']
})
export class UrunEditModalComponent {
  public itemName: string = '';
  public itemPrice: string = '';
  public itemCat: string = '';
  public itemId: any;
  public loginForm = new FormGroup({
    itemName: new FormControl('', [Validators.required]),
    itemPrice: new FormControl('', [Validators.required]),
    itemCat: new FormControl('', [Validators.required])
  })
  constructor(private dialogRef: MatDialogRef<UrunEditModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private listeleService: ListeleService) {
    this.itemName = this.data.itemName
    this.itemPrice = this.data.itemPrice
    this.itemCat = this.data.itemCat
    this.itemId = this.data.id
    console.log(this.data);

  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }
  public update() {
    const items: Object = {
      itemId: this.itemId,
      itemName: this.loginForm.get(['itemName'])?.value,
      itemPrice: this.loginForm.get(['itemPrice'])?.value,
      itemCat: this.loginForm.get(['itemCat'])?.value,
    }
    
    this.listeleService.putItems(items).subscribe((data) => {
      console.log(data);
      this.dialogRef.close(true);
    }, (err: HttpErrorResponse) => {
      this.dialogRef.close(false);
      err.error ? err.message : 'Something went wrong...';
    })
  }



}
