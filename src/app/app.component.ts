import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  info: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = environment.API_DOMAIN;
    const options = { params: new HttpParams().set('t', 'interstellar') };
    this.http.get(url, options).subscribe(
      (resp) => this.info = resp
    );
  }

}
