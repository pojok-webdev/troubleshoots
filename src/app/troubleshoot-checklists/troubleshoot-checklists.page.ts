import { Component, OnInit, ViewChild } from '@angular/core';
import { TroubleshootChecklistsService } from '../troubleshoot-checklists.service';
import { IonContent } from '@ionic/angular';
import { TroubleshootService } from '../troubleshoot.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-troubleshoot-checklists',
  templateUrl: './troubleshoot-checklists.page.html',
  styleUrls: ['./troubleshoot-checklists.page.scss'],
})
export class TroubleshootChecklistsPage implements OnInit {
@ViewChild(IonContent) content: IonContent
  checklist = {
    problemType:'',deviceBrought:'',deviceUsed:'',troubleshootchecklistmaster:[]
  }
  obj
  constructor(
    private checklistmaster: TroubleshootChecklistsService,
    private troubleshoot: TroubleshootService,
    private route: ActivatedRoute
  ) {
    this.troubleshoot.get({id:this.route.snapshot.params.id},res=>{
      console.log("Troubelshoot",res)
      this.obj = res[0]
      this.checklistmaster.getTroubleshootChecklistMaster(res => {
        this.checklist.troubleshootchecklistmaster = res
        this.checklist.troubleshootchecklistmaster.push(
          {category:'Lain-lain',name:'nama cheklist',planning:'',target:'',hasil:'',description:''}
        )
      })
    })
  }

  ngOnInit() {
  }
  goToTop(){
    this.content.scrollToTop()
  }
  saveCheckList(objs){
    console.log("Objs",objs)
  }
}
