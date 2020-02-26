import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session/session.service';
import { User } from '../../core/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: User;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.sessionService.getUserInfo();
  }

  public logout(): void {
    this.sessionService.clearSession();
    this.router.navigate(['/login']);
  }

}
