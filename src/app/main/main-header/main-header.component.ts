import { Component ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  logout:string = 'Çıkış yap';
   sourceName:string = '';

   search(event:any) {
   this.newItemEvent.emit(this.sourceName)
   }
}
