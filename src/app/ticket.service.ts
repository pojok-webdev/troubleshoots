import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppvarService } from './appvar.service';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  obj : Observable<any>
  constructor(private http: HttpClient, private appvar: AppvarService) { }
  get(obj,callback){
    this.execAjax(this.appvar.serverport+'tickets/'+obj.id,callback)
  }
  gets(callback){
    this.execAjax(this.appvar.serverport+'tickets',callback)
  }
  execAjax(url,callback){
    this.obj = this.http.get<any>(this.appvar.serverport)
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
