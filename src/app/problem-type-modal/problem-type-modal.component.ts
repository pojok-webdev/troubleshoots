import { Component, OnInit } from '@angular/core';
import { TroubleshootcausesService } from '../troubleshootcauses.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-problem-type-modal',
  templateUrl: './problem-type-modal.component.html',
  styleUrls: ['./problem-type-modal.component.scss'],
})
export class ProblemTypeModalComponent implements OnInit {
problems
  constructor(private causes: TroubleshootcausesService,private modal: ModalController) {
    this.causes.gets(causes=>{
      this.problems = causes
    })
  }
  addProblemCause(obj){
    this.modal.dismiss(obj)
  }
  ngOnInit() {}

}
