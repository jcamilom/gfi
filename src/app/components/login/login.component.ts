import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public login(): void {
    this.authService.login(this.form.value.email.trim(), this.form.value.password.trim()).subscribe(
      (resp: { email: string }) => {
        this.sessionService.createSession(resp.email);
        this.router.navigate(['/home/search']);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
