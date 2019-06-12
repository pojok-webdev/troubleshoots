import { Component, OnInit, ViewChild } from '@angular/core';
import { TroubleshootChecklistsService } from '../troubleshoot-checklists.service';
import { IonContent, ModalController } from '@ionic/angular';
import { TroubleshootService } from '../troubleshoot.service';
import { ActivatedRoute } from '@angular/router';
import { DevicesModalComponent } from '../devices-modal/devices-modal.component';
import { DeviceService } from '../device.service';
import { ImplementerModalComponent } from '../implementer-modal/implementer-modal.component';
import { UserService } from '../user.service';
import { ProblemTypeModalComponent } from '../problem-type-modal/problem-type-modal.component';
import { TroubleshootcausesService } from '../troubleshootcauses.service';

@Component({
  selector: 'app-troubleshoot-checklists',
  templateUrl: './troubleshoot-checklists.page.html',
  styleUrls: ['./troubleshoot-checklists.page.scss'],
})
export class TroubleshootChecklistsPage implements OnInit {
@ViewChild(IonContent) content: IonContent
  checklist = {
    problemType:'',
    troubleshootdate:'',
    devicesBrought:[],
    devicesUsed:[],
    users:[],
    troubleshootchecklistmaster:[],
    problemTypes:[]
  }
  obj
  devices
  users
  problemTypes
  constructor(
    private troubleshoot: TroubleshootService,
    private checklistservice: TroubleshootChecklistsService,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private device: DeviceService,
    private user: UserService,
    private problemType: TroubleshootcausesService
  ) {
    this.showPage(
      this.route.snapshot.params.actionType,
      this.route.snapshot.params.id
    )
  }
  populateItems(){
    this.checklistservice.getMaster(res => {
      this.checklist.troubleshootchecklistmaster = res
      this.checklist.troubleshootchecklistmaster.push(
        {category:'Lain-lain',name:'nama cheklist',planning:'',target:'',hasil:'',description:''}
      )
    })
    this.device.gets(devices=>{
      this.devices = devices
    })
    this.user.get(users=>{
      this.users = users
    })
    this.problemType.gets(problemTypes=>{
      this.problemTypes = problemTypes
    })
  }
  showPage(actionType,id){
    let that = this
    console.log("actionType,id",actionType,id)
    switch(actionType){
      case 'add':
      console.log("Add Invoked, ID:",id)
        this.troubleshoot.get({id:id},res=>{
          console.log("Troubelshoot",res)
          this.obj = res[0]
          this.populateItems()
        })
      break
      case 'edit':
      console.log("Edit Invoked, ID:",id)
        this.checklistservice.getObj({troubleshootchecklist_id:id},res=>{
          this.obj = res[0]
          this.populateItems()
        })
      break
    }
  }
  ngOnInit() {
  }
  goToTop(){
    this.content.scrollToTop()
  }
  saveCheckList(objs){
    console.log("Objs",objs)
    objs.createuser = "puji"
    objs.troubleshoot_id = this.route.snapshot.params.id
    this.checklistservice.save(objs,result=>{
      console.log("Result",result)
    })
  }
  getDevices(obj){}
  async addDevice(){
    const modal = await this.modalController.create({
      component:DevicesModalComponent,
      componentProps:{
        devices:this.devices
      }
    })
    modal.onDidDismiss().then((obj:any)=>{
      console.log("OBJ got",obj)
      if(typeof obj.data !=="undefined"){
        this.checklist.devicesBrought.push(obj.data)
      }
    })
    return await modal.present()
  }
  async addUsedDevice(){
    const modal = await this.modalController.create({
      component:DevicesModalComponent,
      componentProps:{
        devices:this.checklist.devicesBrought
      }
    })
    modal.onDidDismiss().then((obj:any)=>{
      console.log("OBJ got",obj)
      if(typeof obj.data !=="undefined"){
        this.checklist.devicesUsed.push(obj.data)
      }
    })
    return await modal.present()
  }
  async addImplementer(){
    const modal = await this.modalController.create({
      component:ImplementerModalComponent,
      componentProps:{
        datas:this.users
      }
    })
    modal.onDidDismiss().then((obj:any)=>{
      console.log("OBJ got",obj)
      if(typeof obj.data !=="undefined"){
        this.checklist.users.push(obj.data)
      }
    })
    return await modal.present()
  }
  async addProblemType(){
    const modal = await this.modalController.create({
      component:ProblemTypeModalComponent,
      componentProps:{
        datas:this.problemTypes
      }
    })
    modal.onDidDismiss().then((obj:any)=>{
      console.log("OBJ got",obj)
      if(typeof obj.data !=="undefined"){
        this.checklist.problemTypes.push(obj.data)
      }
    })
    return await modal.present()
  }
  removeDevice(chip){
    chip.remove()
  }
  remove(el,i){
    el.splice(i,1)
    console.log("removed bro")
  }
}
