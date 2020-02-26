import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../../core/models/models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() item: Movie;
  @Output() favoriteClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public addAsFavorite(): void {
    this.favoriteClicked.emit();
  }

}
