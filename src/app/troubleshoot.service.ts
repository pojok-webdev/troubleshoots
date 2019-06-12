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
    console.log("OBJ.ID",obj.id)
    this.execAjax(this.appvar.serverport+'troubleshoot/'+obj.id,callback)
  }
  gets(callback){
    this.execAjax(this.appvar.serverport+'troubleshoots',callback)
  }
  getslimit(obj,callback){
    this.execAjax(this.appvar.serverport+'troubleshootslimit/'+obj.segment+'/'+obj.offset,callback)
  }
  getsearch(obj,callback){
    this.postAjax(this.appvar.serverport+'troubleshootsearch',obj,result => {
      callback(result)
    })
  }
  execAjax(url,callback){
    console.log("URL",url)
    this.obj = this.http.get<any>(url)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        console.log(err)
      }
    )
  }
  postAjax(url,obj,callback){
    this.obj = this.http.post<any>(url,obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        console.log(err)
      }
    )
  }
}
