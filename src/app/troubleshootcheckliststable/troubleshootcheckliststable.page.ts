import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TroubleshootChecklistsService } from '../troubleshoot-checklists.service';
@Component({
  selector: 'app-troubleshootcheckliststable',
  templateUrl: './troubleshootcheckliststable.page.html',
  styleUrls: ['./troubleshootcheckliststable.page.scss'],
})
export class TroubleshootcheckliststablePage implements OnInit {
  checklists
  constructor(
    private route: ActivatedRoute,
    private checklist: TroubleshootChecklistsService
  ) {
    this.checklist.getList({troubleshoot_id:this.route.snapshot.params.id},res => {
      this.checklists = res
    })
  }
  editChecklist(obj){
    window.location.href = "/troubleshoot-checklists/edit/"+obj.id
  }
  ngOnInit() {
  }
  addChecklist(){
    window.location.href = "/troubleshoot-checklists/add/"+this.route.snapshot.params.id
  }
}
