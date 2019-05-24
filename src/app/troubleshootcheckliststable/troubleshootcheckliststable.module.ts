import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TroubleshootcheckliststablePage } from './troubleshootcheckliststable.page';

const routes: Routes = [
  {
    path: '',
    component: TroubleshootcheckliststablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TroubleshootcheckliststablePage]
})
export class TroubleshootcheckliststablePageModule {}
