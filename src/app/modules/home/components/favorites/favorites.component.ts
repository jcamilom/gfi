import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { FavoritesService } from '../../../../services/favorites/favorites.service';
import { Movie } from '../../../../core/models/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public favorites: Movie[] = [];

  constructor(
    private location: Location,
    private favoritesService: FavoritesService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  private getFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  public backClicked() {
    this.location.back();
  }

  public removeFromFavorite(index: number): void {
    const result = this.favoritesService.removeFavorite(this.favorites[index]);
    let message: string;
    const action = 'Close';
    if (result) {
      message = 'Item removed successfully';
      this.getFavorites();
    } else {
      message = 'Item could not be removed';
    }
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
