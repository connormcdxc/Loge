import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: '/new-song',
        children: [
          {
            path: '',
            //loadChildren: '../new-song/new-song.module#NewSongPageModule'
            loadChildren: ()=> import('../new-song/new-song.module').then(mod => mod.NewSongPageModule)
          },
          {
            path: '/new-song2',
            children: [
              {
                path: '',
                //loadChildren: '../new-song2/new-song2.module#NewSong2PageModule'
                loadChildren: ()=> import('../new-song2/new-song2.module').then(mod => mod.NewSong2PageModule)
              },
              {
                path: '/log-success',
                //loadChildren: '../log-success/log-success.module#LogSuccessPageModule'
                loadChildren: ()=> import('../log-success/log-success.module').then(mod => mod.LogSuccessPageModule)
              },
              {
                path: 'login',
                //loadChildren: '../login/login.module#LogSuccessPageModule'
                loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
              }
            ]
          },
          {
            path: '/log-success',
            //loadChildren: '../log-success/log-success.module#LogSuccessPageModule'
            loadChildren: ()=> import('../log-success/log-success.module').then(mod => mod.LogSuccessPageModule)
          },
          {
            path: '/my-log',
            loadChildren: () => import('../my-log/my-log.module').then(m => m.MyLogPageModule)
          },
          {
            path: 'login',
            //loadChildren: '../login/login.module#LogSuccessPageModule'
            loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
          }
        ]
      },
      {
        path: '/my-log',
        loadChildren: () => import('../my-log/my-log.module').then(m => m.MyLogPageModule)
      },
      {
        path: '',
        redirectTo: '/new-song',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/new-song',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule { }
