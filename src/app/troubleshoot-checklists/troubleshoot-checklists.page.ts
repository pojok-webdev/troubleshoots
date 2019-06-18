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
    items:[],
    itemsaveds:[],
    problemTypes:[],
    id:0
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
    console.log("Is that U ?")
    this.showPage(
      this.route.snapshot.params.actionType,
      this.route.snapshot.params.id
    )
  }
  populateMasters(){
    this.checklistservice.getMaster(res => {
      this.checklist.items = res
      this.checklist.items.push(
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
        this.checklist.problemType = 'add'
        this.troubleshoot.get({id:id},res=>{
          this.obj = res[0]
          this.populateMasters()
        })
      break
      case 'edit':
        this.checklist.id = id
        this.checklist.problemType = 'edit'
        this.checklistservice.getObj({troubleshootchecklist_id:id},res=>{
          this.obj = res[0]
          this.checklistservice.getImplementers({troubleshootchecklist_id:id},rows => {
            console.log("rows Impelementers",rows)
            this.checklist.users = rows
          })
          this.checklistservice.getDevicebroughts({troubleshootchecklist_id:id},rows => {
            console.log("rows Devicebroughts",rows)
            this.checklist.devicesBrought = rows
          })
          this.checklistservice.getDeviceuseds({troubleshootchecklist_id:id},rows => {
            console.log("rows Deviceuseds",rows)
            this.checklist.devicesUsed = rows
          })
          this.checklistservice.getProblems({troubleshootchecklist_id:id},rows => {
            console.log("rows Problems",rows)
            this.checklist.problemTypes = rows
          })
          this.checklistservice.getItems({troubleshootchecklist_id:id},rows => {
            console.log("rows Items",rows)
            this.checklist.items = rows
          })
          this.populateMasters()
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
    switch(this.route.snapshot.params.actionType){
      case 'add':
        this.checklistservice.save(objs,result=>{
          console.log("Result",result)
        })  
      break
      case 'edit':
      this.checklistservice.save(objs,result=>{})
        console.log("Should be updated")
      break
    }
  }
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
      console.log("users OBJ got",obj)
      if(typeof obj.data !=="undefined"){
        obj.data.implementer_id = obj.data.id
        obj.data.troubleshootchecklist_id = this.route.snapshot.params.id
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
  removeProblem(el,i){
    this.checklistservice.removeProblem(el[i],res => {
      el.splice(i,1)
    })
    console.log("problem removed bro",el[i])
  }
  removeImplementer(el,i){
    console.log("remove Implementer invoked")
    this.checklistservice.removeImplementer(el[i],res => {
      console.log("RES remove implementer",res)
      el.splice(i,1)
    })
    console.log("implementer removed bro",el[i])
  }
  removeDeviceused(el,i){
    this.checklistservice.removeDeviceused(el[i],res => {
      el.splice(i,1)
    })
    console.log("removed bro",el[i])
  }
  removeDevicebrought(el,i){
    this.checklistservice.removeDevicebrought(el[i],res => {
      el.splice(i,1)
    })
    console.log("removed bro",el[i])
  }
  remove(el,i){
    this.checklistservice.removeDevicebrought(el[i],res => {console.log(res)})
    console.log("removed bro",el[i])
    el.splice(i,1)
  }
}
