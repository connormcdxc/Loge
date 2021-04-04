import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewSong2PageRoutingModule } from './new-song2-routing.module';

import { NewSong2Page } from './new-song2.page';
import { HeaderComponentModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewSong2PageRoutingModule,
    HeaderComponentModule,
  ],
  declarations: [NewSong2Page]
})
export class NewSong2PageModule {}
