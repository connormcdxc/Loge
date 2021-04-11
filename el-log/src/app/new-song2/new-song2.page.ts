import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-new-song2',
  templateUrl: './new-song2.page.html',
  styleUrls: ['./new-song2.page.scss'],
})
export class NewSong2Page implements OnInit {
  data: any;
  song: any;
  complete: any;
  //constructor() { }
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data= this.router.getCurrentNavigation().extras.state.data;
        console.log(this.data);
        //console.log(data);
        console.log("^^data song 2");
      } else {
        console.log(this.router.getCurrentNavigation().extras.state);
      }
    });
  }

  setSong() {
        let navigationExtras: NavigationExtras = {
          state: {
            song: this.song,
            data: this.data
          }
        };
        console.log(navigationExtras);
        console.log("New nav extras ^^");
        this.router.navigate(['log-success'], navigationExtras);
  }

  ngOnInit() {
  }

}
