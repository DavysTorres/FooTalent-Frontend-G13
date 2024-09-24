import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/user.model';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:4000'
  private http = inject(HttpClient)
  constructor() { }

  login(formValues: any){
    return this.http.post(`${this.apiUrl}/login`, {
      email: formValues.email,
      password: formValues.password,
    });
  }

  register(formValues: Users){
    return this.http.post(`${this.apiUrl}/register`, {
      nombre: formValues.nombre,
      email: formValues.email,
      password: formValues.password,
      avatar: formValues.avatar,
      role: formValues.role,
    })
  }

  isLogged() {
    if (localStorage.getItem('user_token')) {
      return true;
    } else {
      return false;
    }
  }

  getDecodedToken(): any {
    const token = localStorage.getItem('user_token');
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.sub;
    }
    return;
  }

  getUser(){
    return this.http.get(`${this.apiUrl}/listar-usuario` + this.getDecodedToken() );
  }

  setToken(token: string){
    localStorage.setItem('user_token', token);
    return;
  }

  removeToken(){
    localStorage.removeItem('user_token');
    return;
  }
}
