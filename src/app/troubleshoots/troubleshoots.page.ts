import { Component, OnInit,ViewChild } from '@angular/core';
import { TroubleshootService } from '../troubleshoot.service';
import { IonInfiniteScroll,IonVirtualScroll } from '@ionic/angular';

@Component({
  selector: 'app-troubleshoots',
  templateUrl: './troubleshoots.page.html',
  styleUrls: ['./troubleshoots.page.scss'],
})
export class TroubleshootsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  troubleshoots
  rowIndex = 0
  rowAmount = 10
  constructor(private troubleshoot:TroubleshootService) {
    this.troubleshoot.getslimit({segment:this.rowIndex,offset:this.rowAmount},res => {
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
      if (this.troubleshoots.length == 100) {
        event.target.disabled = true;
      }
    }, 500);
  }
  loadRows(infiniteScroll?) {
    console.log("infiniteScroll",infiniteScroll)
    this.troubleshoot.getslimit({segment:this.rowIndex,offset:this.rowAmount},resu => {
      this.troubleshoots = resu
    })
  }
  loadMore(infiniteScroll) {
    setTimeout(() => {
    this.rowAmount++;
    this.loadRows(infiniteScroll);
    infiniteScroll.target.complete();
    console.log("rowIndex",this.rowIndex)
    console.log("rowAmount",this.rowAmount)
    if (this.rowIndex === this.rowAmount) {
      //infiniteScroll.enable(false);
    }
  }, 500);
  }
  loadLess(infiniteScroll) {
    console.log("loadLess rowIndex",this.rowIndex)
    setTimeout(() => {
    if(this.rowIndex>0){
      this.rowIndex--;
      this.loadRows(infiniteScroll);
      infiniteScroll.target.complete();
      if (this.rowIndex === 0) {
        //infiniteScroll.enable(false);
      }
    }
  }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
