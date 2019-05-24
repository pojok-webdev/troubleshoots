import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tickets', loadChildren: './tickets/tickets.module#TicketsPageModule' },
  { path: 'troubleshoots', loadChildren: './troubleshoots/troubleshoots.module#TroubleshootsPageModule' },
  { path: 'troubleshoot-checklists/:id', loadChildren: './troubleshoot-checklists/troubleshoot-checklists.module#TroubleshootChecklistsPageModule' },
  { path: 'troubleshootcheckliststable/:id', loadChildren: './troubleshootcheckliststable/troubleshootcheckliststable.module#TroubleshootcheckliststablePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
