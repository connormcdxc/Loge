import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewSong2Page } from './new-song2.page';

const routes: Routes = [
  {
    path: '',
    component: NewSong2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSong2PageRoutingModule {}
