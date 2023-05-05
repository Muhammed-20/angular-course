import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {
  title:string = 'Angular Öğreniyorum';

  tikla()  {
    alert('Bana tıkladın.');
  }
}
