import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../../core/models/models';
import { MoviesService } from '../../../../services/movies/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public results: Movie[] = [];
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

  public addAsFavorite(index: number): void {
    console.log(this.results[index]);
  }

}
