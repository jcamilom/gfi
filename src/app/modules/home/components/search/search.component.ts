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
  public value = 'the lord of the rings';
  public searchedValue: string;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.search();
  }

  public search() {
    this.searchedValue = this.value.trim();
    this.moviesService.search(this.searchedValue).subscribe(
      (resp) => {
        this.results = resp.Search;
      }
    );
  }

}
