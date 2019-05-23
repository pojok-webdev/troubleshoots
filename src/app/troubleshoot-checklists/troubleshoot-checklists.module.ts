import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TroubleshootChecklistsPage } from './troubleshoot-checklists.page';

const routes: Routes = [
  {
    path: '',
    component: TroubleshootChecklistsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TroubleshootChecklistsPage]
})
export class TroubleshootChecklistsPageModule {}
