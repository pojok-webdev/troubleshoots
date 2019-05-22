import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class TroubleshootService {
  obj : Observable<any>
  constructor(private http: HttpClient, private appvar: AppvarService) {}
  get(obj,callback){
    this.execAjax(this.appvar.serverport+'troubleshoot/'+obj.id,callback)
  }
  gets(callback){
    this.execAjax(this.appvar.serverport+'troubleshoots',callback)
  }
  getslimit(obj,callback){
    this.execAjax(this.appvar.serverport+'troubleshootslimit/'+obj.segment+'/'+obj.offset,callback)
  }
  execAjax(url,callback){
    this.obj = this.http.get<any>(url)
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
