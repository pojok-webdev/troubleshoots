import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-devices-modal',
  templateUrl: './devices-modal.component.html',
  styleUrls: ['./devices-modal.component.scss'],
})
export class DevicesModalComponent implements OnInit {
devices = ['router','switch','bla-bla','abc']
  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  filterItem(searchItem){
    console.log("searchItem",searchItem)
    return this.devices.filter(device => {
      console.log("device",device)
      return device.toLowerCase().indexOf(searchItem.toLowerCase())>-1
    })
  }
  chooseDevice(obj){
    this.modalController.dismiss(obj)
  }
}
