import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MoviesService } from '../../../../services/movies/movies.service';
import { MovieDetail } from '../../../../core/models/models';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movie: MovieDetail;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.moviesService.getMovie(id).subscribe(
      (resp) => {
        console.log(resp);
        this.movie = resp;
      }, err => {
        console.log(err);
      }
    );
  }

  public backClicked() {
    this.location.back();
  }

}
