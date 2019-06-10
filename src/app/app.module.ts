import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TicketMenuComponent } from './ticket-menu/ticket-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { DevicesModalComponent } from './devices-modal/devices-modal.component';
import { FormsModule } from '@angular/forms';
import { ImplementerModalComponent } from './implementer-modal/implementer-modal.component';
import { ProblemTypeModalComponent } from './problem-type-modal/problem-type-modal.component';

@NgModule({
  declarations: [AppComponent,TicketMenuComponent,DevicesModalComponent,ImplementerModalComponent,ProblemTypeModalComponent],
  entryComponents: [TicketMenuComponent,DevicesModalComponent,ImplementerModalComponent,ProblemTypeModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
