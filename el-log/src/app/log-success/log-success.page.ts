import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-success',
  templateUrl: './log-success.page.html',
  styleUrls: ['./log-success.page.scss'],
})
export class LogSuccessPage implements OnInit {
  data: any;
  song: any;
  currentDate = new Date();
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.song = this.router.getCurrentNavigation().extras.state.song;
        var obj = { artist: this.data, song: this.song, date: this.currentDate, uid: 1  };
        console.log(this.currentDate);
        console.log(this.data);
        console.log(this.song);
        var link = 'https://connormcd.com/loge/loge_submit.php'; 
        http.post(link, obj);
        /*.then(function (res){
            $scope.response = res.data;
        });*/
        //console.log("^^data success");
      } else {
        console.log(this.router.getCurrentNavigation().extras.state);
      }
    });
  }

  ngOnInit() {
  }

}
