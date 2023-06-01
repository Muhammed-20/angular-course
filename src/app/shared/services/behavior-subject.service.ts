import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {
  private nofificationBS: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public notification: Observable<boolean> = this.nofificationBS.asObservable();
  
  constructor() { }
  public emitNotification(data: boolean): void {
    this.nofificationBS.next(data);
  }
}
