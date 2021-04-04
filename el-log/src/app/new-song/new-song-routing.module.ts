import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewSongPage } from './new-song.page';

const routes: Routes = [
  {
    path: '',
    component: NewSongPage,
    children: [
      {
        path: '/login',
        //loadChildren: '../login/login.module#LogSuccessPageModule'
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSongPageRoutingModule {}
