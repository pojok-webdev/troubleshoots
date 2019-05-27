import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class TroubleshootChecklistsService {
  obj: Observable<any>
  constructor(private http: HttpClient,private appvar:AppvarService) { }
  getTroubleshootChecklistMaster(callback){
    this.obj = this.http.get(this.appvar.serverport+'troubleshootchecklistmaster')
    this.obj.subscribe(
      data => {
        callback(data)
      },
      error => {
        callback(error)
      }
    )
  }
  troubleshootchecklistsgetbytroubleshoot(obj,callback){
    this.obj = this.http.get(this.appvar.serverport+'troubleshootchecklistsgetbytroubleshoot/'+obj.troubleshoot_id)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      error => {
        callback(error)
      }
    )    
  }
    
}
