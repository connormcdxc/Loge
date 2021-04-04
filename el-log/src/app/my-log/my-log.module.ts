import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyLogPageRoutingModule } from './my-log-routing.module';

import { MyLogPage } from './my-log.page';
import { HeaderComponentModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyLogPageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [MyLogPage]
})
export class MyLogPageModule {}
