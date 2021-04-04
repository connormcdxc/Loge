import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogSuccessPage } from './log-success.page';

const routes: Routes = [
  {
    path: '',
    component: LogSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogSuccessPageRoutingModule {}
