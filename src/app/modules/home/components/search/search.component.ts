import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../../core/models/models';
import { MoviesService } from '../../../../services/movies/movies.service';
import { FavoritesService } from '../../../../services/favorites/favorites.service';
import { DataService } from '../../../../services/data/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public results: Movie[] = [];
  public value = 'the lord of the rings';
  public searchedValue: string;

  constructor(
    private moviesService: MoviesService,
    private favoritesService: FavoritesService,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    if (this.dataService.lastSearchString !== '') {
      this.value = this.dataService.lastSearchString;
      this.results = this.dataService.lastSearchResult;
    } else {
      this.search();
    }
  }

  public search() {
    this.searchedValue = this.value.trim();
    this.dataService.lastSearchString = this.searchedValue;
    this.moviesService.search(this.searchedValue).subscribe(
      (resp) => {
        this.results = resp.Search;
        this.dataService.lastSearchResult = this.results;
      }
    );
  }

  public addAsFavorite(index: number): void {
    this.favoritesService.addFavorite(this.results[index]);
  }

}
