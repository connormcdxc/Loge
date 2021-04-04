import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-new-song2',
  templateUrl: './new-song2.page.html',
  styleUrls: ['./new-song2.page.scss'],
})
export class NewSong2Page implements OnInit {
  data: any;
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
  ngOnInit() {
  }

}
