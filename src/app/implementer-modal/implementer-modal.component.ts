import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-implementer-modal',
  templateUrl: './implementer-modal.component.html',
  styleUrls: ['./implementer-modal.component.scss'],
})
export class ImplementerModalComponent implements OnInit {
datas
filtereddatas
  constructor(private navpar: NavParams,private modal:ModalController) {
    this.datas = this.navpar.get('datas')
    this.reloadData("")
  }
  ngOnInit() {}
  reloadData(searchtext){
    this.filtereddatas = this.search(searchtext)
  }
  search(searchtext){
    return this.datas.filter(res => {
      return res.username.toLowerCase().indexOf(searchtext.toLowerCase()) > -1
    })
  }
  chooseItem(data){
    this.modal.dismiss(data)
  }
}
