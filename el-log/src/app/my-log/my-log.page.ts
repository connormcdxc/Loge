import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-log',
  templateUrl: './my-log.page.html',
  styleUrls: ['./my-log.page.scss'],
})
export class MyLogPage implements OnInit {
  data = [];
  constructor(private http: HttpClient) {
    this.http.get('http://connormcd.com/loge/loge.php').subscribe(data => {
        this.data.push(data);
        console.log(this.data);
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
