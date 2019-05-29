import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-devices-modal',
  templateUrl: './devices-modal.component.html',
  styleUrls: ['./devices-modal.component.scss'],
})
export class DevicesModalComponent implements OnInit {
devices = []
filteredDevices = []
  constructor(private modalController: ModalController,private navParam: NavParams) {
    console.log('navParams devices',this.navParam.get('devices'))
    this.devices = this.navParam.get('devices')
    this.filteredDevices = this.filterItem('')
  }

  ngOnInit() {}
  filterItem(searchItem){
    console.log("searchItem",searchItem)
    return this.devices.filter(device => {
      console.log("device",device)
      return device.name.toLowerCase().indexOf(searchItem.toLowerCase())>-1
    })
  }
  reloadDevice(searchItem){
    this.filteredDevices = this.filterItem(searchItem)
  }
  chooseDevice(obj){
    this.modalController.dismiss(obj)
  }
}
