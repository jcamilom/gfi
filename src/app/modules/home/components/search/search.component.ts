import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  public value = '';
  public searchedValue: string;

  constructor(
    private moviesService: MoviesService,
    private favoritesService: FavoritesService,
    private dataService: DataService,
    private snackBar: MatSnackBar,
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
    if (this.searchedValue === '') {
      return;
    }
    this.dataService.lastSearchString = this.searchedValue;
    this.moviesService.search(this.searchedValue).subscribe(
      (resp) => {
        this.results = resp.Search;
        this.dataService.lastSearchResult = this.results;
      }
    );
  }

  public addAsFavorite(index: number): void {
    const result = this.favoritesService.addFavorite(this.results[index]);
    let message: string;
    const action = 'Close';
    if (result) {
      message = 'Added to favorites successfully';
    } else {
      message = 'Item is already a favorite';
    }
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
