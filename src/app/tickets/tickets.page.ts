import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TicketMenuComponent } from '../ticket-menu/ticket-menu.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    console.log("mbanyol")
    const popover = await this.popoverController.create({
      component: TicketMenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
