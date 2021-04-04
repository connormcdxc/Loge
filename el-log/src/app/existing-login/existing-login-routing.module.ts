import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistingLoginPage } from './existing-login.page';

const routes: Routes = [
  {
    path: '',
    component: ExistingLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistingLoginPageRoutingModule {}
