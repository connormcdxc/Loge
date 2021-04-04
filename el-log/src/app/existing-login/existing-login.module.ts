import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistingLoginPageRoutingModule } from './existing-login-routing.module';

import { ExistingLoginPage } from './existing-login.page';
import { HeaderComponentModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistingLoginPageRoutingModule,
    HeaderComponentModule
  ],
  declarations: [ExistingLoginPage]
})
export class ExistingLoginPageModule {}
