import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class TroubleshootcausesService {
obj:Observable<any>
  constructor(private http:HttpClient,private appvar:AppvarService) {}
  gets(callback){
    this.obj = this.http.get(this.appvar.serverport+'ticketproblems')
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
