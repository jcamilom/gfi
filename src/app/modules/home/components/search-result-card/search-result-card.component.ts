import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../../core/models/models';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss']
})
export class SearchResultCardComponent implements OnInit {

  @Input() item: Movie;
  @Output() favoriteClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public addAsFavorite(): void {
    this.favoriteClicked.emit();
  }

}
