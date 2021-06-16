import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Song, songs } from '../songs';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-success',
  templateUrl: './log-success.page.html',
  styleUrls: ['./log-success.page.scss'],
})
export class LogSuccessPage implements OnInit {
  data: any;
  song: any;
  response:any;
  currentDate = new Date();
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private logService: LogService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.song = this.router.getCurrentNavigation().extras.state.song;
        var obj = { artist: this.data, song: this.song, date: this.currentDate, uid: 1  };
        /*console.log(this.currentDate);
        console.log(this.data);
        console.log(this.song);
        var link = 'http://connormcd.com/loge/loge_submit.php';
        this.http.post<any>(link, obj).subscribe({
          next: data => {
            this.response = data;
          },
          error: error => {
            this.response = error.message;
            console.error('There was an error!', error);
          }
        });*/
      }
    });
    addToLog(song: Song) {
      this.logService.addToLog(song);
    }
  }
}
