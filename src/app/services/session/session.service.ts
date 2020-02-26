import { Injectable } from '@angular/core';
import { User } from '../../core/models/models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  get isLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  public createSession(user: User): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    // Add localStorage key if it doesn't exists
    const userStorage = localStorage.getItem(user.email);
    if (userStorage === null) {
      const userData = { favorites: [] };
      localStorage.setItem(user.email, JSON.stringify(userData));
    }
  }

  public clearSession(): void {
    sessionStorage.removeItem('user');
  }

  public getUserInfo(): User | null {
    const user = sessionStorage.getItem('user');
    return user !== null ? JSON.parse(user) as User : null;
  }

}
