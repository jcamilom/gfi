import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gfi';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = `${environment.API_DOMAIN}/?apikey=${environment.API_KEY}&t=interstellar`;
    this.http.get(url).subscribe(
      (resp) => console.log(resp)
    );
  }

}
