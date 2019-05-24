import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-troubleshootcheckliststable',
  templateUrl: './troubleshootcheckliststable.page.html',
  styleUrls: ['./troubleshootcheckliststable.page.scss'],
})
export class TroubleshootcheckliststablePage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  addChecklist(){
    window.location.href = "/troubleshoot-checklists/"+this.route.snapshot.params.id
  }
}
