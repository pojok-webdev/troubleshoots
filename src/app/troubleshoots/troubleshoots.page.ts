import { Component, OnInit,ViewChild } from '@angular/core';
import { TroubleshootService } from '../troubleshoot.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-troubleshoots',
  templateUrl: './troubleshoots.page.html',
  styleUrls: ['./troubleshoots.page.scss'],
})
export class TroubleshootsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  troubleshoots
  constructor(private troubleshoot:TroubleshootService) {
    this.troubleshoot.gets(res => {
      console.log("Gets",res)
      this.troubleshoots = res
    })
  }

  ngOnInit() {
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.troubleshoots.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
