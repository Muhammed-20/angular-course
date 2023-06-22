import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cikis-modal',
  templateUrl: './cikis-modal.component.html',
  styleUrls: ['./cikis-modal.component.css']
})
export class CikisModalComponent {

constructor(private dialogRef: MatDialogRef<CikisModalComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private _snack:MatSnackBar) {}

  public cancel() {
    this.dialogRef.close();

  }
  public logout() {
    this.data.navigate(['auth/login']);
    this.dialogRef.afterClosed().subscribe(() => {
      this._snack.open('Başarılı bir şekilde çıkış yapılmıştır','kapat', {
        duration:1000
      });
    })
    localStorage.removeItem('role');
  }
}
