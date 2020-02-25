import { Component } from '@angular/core';

import { SearchResultItem } from './core/models/models';
import { MoviesService } from './services/movies/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public results: SearchResultItem[] = [];
  public value = '';

  constructor(private moviesService: MoviesService) { }

  public search() {
    this.moviesService.search(this.value.trim()).subscribe(
      (resp) => {
        this.results = resp.Search;
      }
    );
  }

}
