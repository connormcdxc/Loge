import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLogPage } from './my-log.page';

const routes: Routes = [
  {
    path: '',
    component: MyLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLogPageRoutingModule {}
