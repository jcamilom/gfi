import { Component, OnInit } from '@angular/core';
import { SearchResultItem } from '../../../../core/models/models';
import { MoviesService } from '../../../../services/movies/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public results: SearchResultItem[] = [];
  public value = '';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  public search() {
    this.moviesService.search(this.value.trim()).subscribe(
      (resp) => {
        this.results = resp.Search;
      }
    );
  }

}
