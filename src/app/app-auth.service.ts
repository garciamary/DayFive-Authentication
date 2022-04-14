import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppAuthService {
  username = '';
  password = '';
  url = 'https://api-ubertickets.cloudstaff.com/v1/auth/login';

  constructor(private _httlpClient: HttpClient) {}

  login(credential: any): any {
    return this._httlpClient.post(this.url, credential);
  }

  setSession(token: string) {
    localStorage.setItem('authToken', token);
  }

  getSession() {
    return localStorage.getItem('authToken');
  }
}
