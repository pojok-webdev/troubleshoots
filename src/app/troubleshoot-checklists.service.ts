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
  getImplementers(troubleshootchecklist,callback){
    this.obj = this.http.get(
      this.appvar.serverport+'troubleshootchecklistimplementers/'+troubleshootchecklist.troubleshootchecklist_id
    )
    this.obj.subscribe(
      data => {
        callback(data)
      },
      error => {
        callback(error)
      }
    )
  }
  getDevicebroughts(troubleshootchecklist,callback){
    this.obj = this.http.get(
      this.appvar.serverport+'troubleshootchecklistdevicebroughts/'+troubleshootchecklist.troubleshootchecklist_id
    )
    this.obj.subscribe(
      data => {
        callback(data)
      },
      error => {
        callback(error)
      }
    )
  }
  getDeviceuseds(troubleshootchecklist,callback){
    this.obj = this.http.get(
      this.appvar.serverport+'troubleshootchecklistdeviceuseds/'+troubleshootchecklist.troubleshootchecklist_id
    )
    this.obj.subscribe(
      data => {
        callback(data)
      },
      error => {
        callback(error)
      }
    )
  }
  getProblems(troubleshootchecklist,callback){
    this.obj = this.http.get(
      this.appvar.serverport+'troubleshootchecklistproblems/'+troubleshootchecklist.troubleshootchecklist_id
    )
    this.obj.subscribe(
      data => {
        callback(data)
      },
      error => {
        callback(error)
      }
    )
  }
  getMaster(callback){
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
  getList(obj,callback){
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
  removeImplementer(obj,callback){
    this.obj = this.http.get(
      this.appvar.serverport+'troubleshootchecklistremoveimplementer/'+obj.troubleshootchecklist_id+'/'+obj.implementer_id
    )
    this.obj.subscribe(
      data => {
        callback(data)
      },
      error => {
        callback(error)
      }
    )
  }
  removeDevicebrought(obj,callback){
    this.obj = this.http.get(
      this.appvar.serverport+'troubleshootchecklistremovedevicebrought/'+obj.troubleshootchecklist_id+'/'+obj.device_id
    )
    this.obj.subscribe(
      data => {
        callback(data)
      },
      error => {
        callback(error)
      }
    )
  }
  removeDeviceused(obj,callback){
    this.obj = this.http.get(
      this.appvar.serverport+'troubleshootchecklistremovedeviceused/'+obj.troubleshootchecklist_id+'/'+obj.device_id
    )
    this.obj.subscribe(
      data => {
        callback(data)
      },
      error => {
        callback(error)
      }
    )
  }
  removeProblem(obj,callback){
    this.obj = this.http.get(
      this.appvar.serverport+'troubleshootchecklistremoveproblem/'+obj.troubleshootchecklist_id+'/'+obj.problem_id
    )
    this.obj.subscribe(
      data => {
        callback(data)
      },
      error => {
        callback(error)
      }
    )
  }
  getObj(obj,callback){
    console.log("Troubleshootchecklist_id",obj)
    this.obj = this.http.get(this.appvar.serverport+'troubleshootchecklistsgetbyid/'+obj.troubleshootchecklist_id)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      error => {
        callback(error)
      }
    )    
  }
  save(obj,callback){
    this.obj = this.http.post(this.appvar.serverport+'troubleshootchecklistsave',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  update(obj,callback){
    this.obj = this.http.post(this.appvar.serverport+'troubleshootchecklistupdate',obj)
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
