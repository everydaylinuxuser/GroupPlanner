import { AuthResponse } from '../models/auth-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = API_CONFIG.baseUrl + '/auth';

  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, {
      email,
      password
    });
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, {
      email,
      password
    });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
