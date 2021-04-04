import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogSuccessPageRoutingModule } from './log-success-routing.module';

import { LogSuccessPage } from './log-success.page';
import { HeaderComponentModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogSuccessPageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [LogSuccessPage]
})
export class LogSuccessPageModule {}
