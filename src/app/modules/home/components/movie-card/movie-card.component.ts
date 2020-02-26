import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../../core/models/models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() item: Movie;
  @Input() isFavorite: boolean;
  @Output() favoriteClicked = new EventEmitter<any>();
  @Output() removeFavoriteClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public addAsFavorite($event: Event): void {
    $event.stopPropagation();
    this.favoriteClicked.emit();
  }

  public removeFromFavorite($event: Event): void {
    $event.stopPropagation();
    this.removeFavoriteClicked.emit();
  }

}
