import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_DOMAIN = 'http://www.omdbapi.com';
const API_KEY = 'xxxxxx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gfi';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = `${API_DOMAIN}/?apikey=${API_KEY}&t=interstellar`;
    this.http.get(url).subscribe(
      (resp) => console.log(resp)
    );
  }

}
