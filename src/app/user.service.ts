import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  obj:Observable<any>
  constructor(private http: HttpClient,private appvar:AppvarService) {}
  get(callback){
    console.log("User service invoked")
    this.obj = this.http.get(this.appvar.serverport+'usergets/4')
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
}
