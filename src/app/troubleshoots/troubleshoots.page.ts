import { Component, OnInit, ViewChild } from '@angular/core';
import { TroubleshootService } from '../troubleshoot.service';
import { IonInfiniteScroll, IonVirtualScroll, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-troubleshoots',
  templateUrl: './troubleshoots.page.html',
  styleUrls: ['./troubleshoots.page.scss'],
})
export class TroubleshootsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  @ViewChild(IonContent) content: IonContent;
  troubleshoots
  rowIndex = 0
  rowAmount = 10
  queryText
  constructor(private troubleshoot:TroubleshootService) {
    this.troubleshoot.getslimit({segment:this.rowIndex,offset:this.rowAmount},res => {
      console.log("Gets",res)
      this.troubleshoots = res
    })
  }

  ngOnInit() {
  }
  searchByKeyword(event){
    this.troubleshoot.getsearch({clientname:this.queryText,kdticket:this.queryText,segment:0,offset:100},res=>{
      console.log("search result",res)
      this.troubleshoots = res
    })
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
  showChecklist(obj){
    window.location.href = "/troubleshoot-checklists/"+obj.id
  }
  goTop(){
    console.log("should be go to top")
    this.content.scrollToTop()
  }

}
