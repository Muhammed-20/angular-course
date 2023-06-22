import { Component ,EventEmitter,Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CikisModalComponent } from 'src/app/shared/component/modals/cikis-modal/cikis-modal.component';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})
export class MainHeaderComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  logout:string = 'Çıkış yap';
   sourceName:string = '';
   role:any ;
   constructor(private router:Router,private dialog:MatDialog) {
   this.role = localStorage.getItem('role');
   }
   public search(event:any) {
   this.newItemEvent.emit(this.sourceName)
   }
   public cikis() {
      this.dialog.open(CikisModalComponent, {
        width:'250px',
        height: '250px',
        data:this.router
      })
   }
}
