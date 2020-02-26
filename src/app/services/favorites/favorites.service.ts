import { Injectable } from '@angular/core';

import { Movie } from '../../core/models/models';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private sessionService: SessionService) { }

  /**
   * Adds favorite if not exists, Returns true if item added.
   */
  public addFavorite(movie: Movie): boolean {
    const userEmail = this.sessionService.getUserInfo().email;
    const userData: { favorites: Movie[] } = JSON.parse(localStorage.getItem(userEmail));
    const currentFavorites = userData.favorites;
    const idx = currentFavorites.findIndex(favorite => favorite.imdbID === movie.imdbID);
    if (idx === -1) {
      currentFavorites.push(movie);
      const newUserData = { favorites: currentFavorites };
      localStorage.setItem(userEmail, JSON.stringify(newUserData));
      return true;
    }
    return false;
  }

  public getFavorites(): Movie[] {
    const userEmail = this.sessionService.getUserInfo().email;
    const userData: { favorites: Movie[] } = JSON.parse(localStorage.getItem(userEmail));
    return userData.favorites;
  }

}
