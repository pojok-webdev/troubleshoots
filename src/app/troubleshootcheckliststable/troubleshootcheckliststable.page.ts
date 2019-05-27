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
      this.checklist.troubleshootchecklistsgetbytroubleshoot({troubleshoot_id:this.route.snapshot.params.id},res => {
        console.log("Res",res)
        this.checklists = res
      })
    }

  ngOnInit() {
  }
  addChecklist(){
    window.location.href = "/troubleshoot-checklists/"+this.route.snapshot.params.id
  }
}
