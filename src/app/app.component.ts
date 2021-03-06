import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TroubleshootService } from './troubleshoot.service';
import { TroubleshootChecklistsService } from './troubleshoot-checklists.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pageTitle
  appmenu = {firstmenu:{label:'Halaman Awal',url:'/home',icon:'home'}}
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private troubleshoot: TroubleshootService,
    private checklist: TroubleshootChecklistsService
  ) {
    this.initializeApp();
    const path: string[] = this.platform.url().split('/');
    console.debug(path[path.length - 1]);
    console.log("Path Length",path.length)
    console.log("PATh",path[path.length - 1]);
    console.log("Path 4",path[4])
    console.log("Path3",path[3])
    if(path.length>2){
      switch(path[3]){
        case 'troubleshoot-checklists':
          this.troubleshoot.get({id:path[5]},res=>{
            console.log("ID TROUBLESHOOT",res)
            this.pageTitle = "Checklist " + res[0].name
            this.appmenu.firstmenu.icon = "arrow-round-back"
            this.appmenu.firstmenu.label = "Kembali ke " + res[0].name
            this.appmenu.firstmenu.url = "/troubleshootcheckliststable/"+res[0].id
            })
        this.pageTitle = 'Checklist TS '
        break
        case 'troubleshoots':
          this.pageTitle = path[path.length - 1]
        break
        case 'troubleshootcheckliststable':
        this.checklist.getList({troubleshoot_id:path[4]},res=>{
          console.log("APPCOMPONENT res",res)
          if(res.count>0){
            this.pageTitle = "Tabel Checklist " + res[0].name
          }
          this.appmenu.firstmenu.label = "Halaman Awal"
          this.appmenu.firstmenu.icon = "home"
          this.appmenu.firstmenu.url = "/"
        })
        break
        case 'home':
          this.appmenu.firstmenu.label = "Halaman Awal"
          this.appmenu.firstmenu.icon = "home"
          this.appmenu.firstmenu.url = "/"
        break
      }
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
