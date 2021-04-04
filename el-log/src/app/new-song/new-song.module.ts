import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { NewSongPageRoutingModule } from './new-song-routing.module';

import { NewSongPage } from './new-song.page';
import { HeaderComponentModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewSongPageRoutingModule,
    HeaderComponentModule
  ],
  //declarations: [NewSongPage,Names]
  declarations: [NewSongPage]
})
export class NewSongPageModule {/*
  constructor(private stateService: StateService) {}
  goToComponentB(): void {
       this.router.navigate(['/new-song2'], {state: {data: {...}}});
   }*/

}
/*export class NewSong2PageModule implements OnInit {
    constructor(private stateService: StateService) {}
    ngOnInit(): void {
        this.data = this.stateService.data;
        this.stateService.data = undefined;
    }
}*/
