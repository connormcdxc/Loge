import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'new-song',
    loadChildren: () => import('./new-song/new-song.module').then( m => m.NewSongPageModule)
  },
  {
    path: 'my-log',
    loadChildren: () => import('./my-log/my-log.module').then( m => m.MyLogPageModule)
  },
  {
    path: 'new-song2',
    loadChildren: () => import('./new-song2/new-song2.module').then( m => m.NewSong2PageModule)
  },
  {
    path: 'tablinks',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },
  {
    path: 'existing-login',
    loadChildren: () => import('./existing-login/existing-login.module').then( m => m.ExistingLoginPageModule)
  },
  {
    path: 'log-success',
    loadChildren: () => import('./log-success/log-success.module').then( m => m.LogSuccessPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
