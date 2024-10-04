import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/user.model';
import { jwtDecode } from 'jwt-decode';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:4000/api'
  private http = inject(HttpClient)
  constructor() { }

  login(formValues: Login){
    return this.http.post(`${this.apiUrl}/usuario/login`, formValues);
  }

  register(formValues: Users){
    return this.http.post(`${this.apiUrl}/usuario/register`, formValues)
  }

  /*setToken(token: string){
    console.log('token', token)
    localStorage.setItem('user_token', token);
    return;
  }*/

  getDecodedToken(): any {
    const token = localStorage.getItem('user_token');
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.sub;
    }
    return;
  }


  isLogged() {
    if (localStorage.getItem('user_token')) {
      return true;
    } else {
      return false;
    }
  }


  getUser(){
    return this.http.get(`${this.apiUrl}/listar-usuario` + this.getDecodedToken() );
  }



  removeToken(){
    localStorage.removeItem('user_token');
    return;
  }
}
