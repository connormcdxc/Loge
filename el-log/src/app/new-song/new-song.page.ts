import { Component, OnInit } from '@angular/core';
import {Directive} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.page.html',
  styleUrls: ['./new-song.page.scss'],
})
@Directive({
 selector: '[radioGroup]',
 exportAs: 'Names'
})

export class NewSongPage implements OnInit {
  data = '';
  name: string="";
  constructor(private router: Router) {
    //let data = '';
   }
  radioGroupChange(event) {
    this.data = event.detail.value;
  }

  setArtist() {
      if(this.name) {
        let navigationExtras: NavigationExtras = {
          state: {
            data: this.name
          }
        };
        this.router.navigate(['new-song2'], navigationExtras);
        console.log(this.name);
      } else {
      let navigationExtras: NavigationExtras = {
        state: {
          data: this.data
        }
      };
      this.router.navigate(['new-song2'], navigationExtras);
      }
    }

  ngOnInit() {
    //let navigationExtras: NavigationExtras = { state: { data: e } };
    //this.router.navigate(['/new-song2'], navigationExtras);
  }

}
/*export class Names {
  radioGroupChange(event) {
    var e = event.detail.value;
    console.log(e);
    history.pushState({data: {e}}, '', '');
    console.log(history.state.data);
  }
}*/
