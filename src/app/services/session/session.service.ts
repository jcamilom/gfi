import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  get isLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  public createSession(user: string): void {
    sessionStorage.setItem('user', user);
  }

  public clearSession(): void {
    sessionStorage.removeItem('user');
  }

}
