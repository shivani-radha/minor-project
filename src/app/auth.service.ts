import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly HR_USERNAME = 'hruser';
  private readonly HR_PASSWORD = 'hrpassword';

  private loggedIn = false;

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === this.HR_USERNAME && password === this.HR_PASSWORD) {
      this.loggedIn = true;
      return true;
    } else {
      this.loggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  isHr(): boolean {
    return this.loggedIn;
  }
}