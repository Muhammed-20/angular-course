import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(public base: BaseService) {
    super(base.http)
  }
  public postUsers(Obj: any) {
    return this.base.postReq('/users', Obj)
  }
  public getUsers() {
    return this.base.getReq('/users')
  }
  public putUsers(url: any, data: any) {
    return this.base.putReq(url, data)
  }
}
