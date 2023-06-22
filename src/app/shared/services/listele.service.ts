import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ListeleService extends BaseService{

  constructor(public base: BaseService) {
    super(base.http)
  }

  public postItems(Obj: any) {
    return this.base.postReq('/items', Obj)
  }
  public getItems() {
    return this.base.getReq('/items')
  }
  public putItems(Obj:any) {
    return this.base.putReq(`/items/${Obj.itemId}`,Obj)
  }
}
