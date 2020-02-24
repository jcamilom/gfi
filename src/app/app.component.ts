import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

import { environment } from '../environments/environment';
import { SearchResultItem } from './core/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public results: SearchResultItem[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = environment.API_DOMAIN;
    const options = { params: new HttpParams().set('s', 'interstellar') };
    this.http.get(url, options).subscribe(
      (resp: { Search: SearchResultItem[], totalResults: string, Response: 'True' | 'False' }) => this.results = resp.Search
    );
  }

}
