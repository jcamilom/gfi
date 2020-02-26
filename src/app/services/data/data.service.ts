import { Injectable } from '@angular/core';
import { Movie } from '../../core/models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public lastSearchString: string;
  public lastSearchResult: Movie[] = [];

  constructor() { }

  public cleanLastResult(): void {
    this.lastSearchString = '';
    this.lastSearchResult = [];
  }

}
