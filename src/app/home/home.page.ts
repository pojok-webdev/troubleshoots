import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private menu: MenuController,private nav: NavController
  ){
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }
  goToTicket(){
    window.location.href = "/tickets"
  }
  goToTroubleshoot(){
    window.location.href = "/troubleshoots"
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
