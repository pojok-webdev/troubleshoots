import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TroubleshootService } from './troubleshoot.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pageTitle
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private troubleshoot: TroubleshootService
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
            this.pageTitle = "Checklist " + res[0].name
          })
        this.pageTitle = 'Checklist TS '
        break
        case 'troubleshoots':
          this.pageTitle = path[path.length - 1]
        break
        case 'troubleshootcheckliststable':
        this.troubleshoot.get({id:path[5]},res=>{
          this.pageTitle = "Tabel Checklist " + res[0].name
        })
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
