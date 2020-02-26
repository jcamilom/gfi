import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { FavoritesService } from '../../../../services/favorites/favorites.service';
import { Movie } from '../../../../core/models/models';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public favorites: Movie[] = [];

  constructor(private location: Location, private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  public backClicked() {
    this.location.back();
  }

}
