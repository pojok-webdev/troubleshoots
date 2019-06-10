import { Component, OnInit } from '@angular/core';
import { TroubleshootcausesService } from '../troubleshootcauses.service';

@Component({
  selector: 'app-problem-type-modal',
  templateUrl: './problem-type-modal.component.html',
  styleUrls: ['./problem-type-modal.component.scss'],
})
export class ProblemTypeModalComponent implements OnInit {
problems
  constructor(private causes: TroubleshootcausesService) {
    this.causes.gets(causes=>{
      this.problems = causes
    })
  }

  ngOnInit() {}

}
