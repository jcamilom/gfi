import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service';
import { User } from '../../core/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: User;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.user = this.sessionService.getUserInfo();
  }

}
