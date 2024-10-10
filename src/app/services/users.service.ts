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

  login(formValues: Login) {
    return this.http.post(`${this.apiUrl}/usuario/login`, formValues);
  }

  register(formValues: Users) {
    return this.http.post(`${this.apiUrl}/usuario/register`, formValues)
  }
  requestResetPassword(formValues: Users) {
    return this.http.post(`${this.apiUrl}/usuario/requestResetPassword`, formValues)
  }

  resetPassword(data: { userId: string, token: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuario/resetPassword`, data)
  }

  setToken(token: string) {

    localStorage.setItem('user_token', token);
  }
  setUsuario(idUsuario:any, nombre:string, email:string){
    localStorage.setItem('user_id', idUsuario)
    localStorage.setItem('user_nombre', nombre)
    localStorage.setItem('user_email', email)
  }
  
  getDecodedToken(): any {
    const token = localStorage.getItem('user_token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        return decodedToken.sub;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }
  
  isLogged(): boolean {
    return !!localStorage.getItem('user_token');
  }
  
  getUser() {
    const userId = this.getDecodedToken();
    if (userId) {
      return this.http.get(`${this.apiUrl}/listar-usuario/${userId}`);
    } else {
      console.error('User ID not found');
      return null;
    }
  }
  
  removeToken() {
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_id')
    localStorage.removeItem('user_nombre')
    localStorage.removeItem('user_email')
    
  }
}
