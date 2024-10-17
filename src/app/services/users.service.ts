import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/user.model';
import { jwtDecode } from 'jwt-decode';
import { Login } from '../models/login.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';
import { environmentProd } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl =  environmentProd.API_URL
  private http = inject(HttpClient)
  private loginStatus = new BehaviorSubject<boolean>(this.isLogged());

  loginStatus$ = this.loginStatus.asObservable();

  constructor() { }

  login(formValues: Login) {
    return this.http.post(`${this.apiUrl}/usuario/inicio-sesion`, formValues);
  }

  register(formValues: Users) {
    return this.http.post(`${this.apiUrl}/usuario/registro`, formValues)
  }
  requestResetPassword(formValues: Users) {
    return this.http.post(`${this.apiUrl}/usuario/requestResetPassword`, formValues)
  }

  resetPassword(data: { userId: string, token: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuario/resetPassword`, data)
  }
  verifyAccount(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario/verifyAccount`, {
      params: { token }
    });
  }

  setToken(token: string) {
    localStorage.setItem('user_token', token);
    this.loginStatus.next(true);
  }

  setUsuario(idUsuario:any, nombre:string, email:string, avatarUrl: string){
    localStorage.setItem('user_id', idUsuario)
    localStorage.setItem('user_nombre', nombre)
    localStorage.setItem('user_email', email)
    localStorage.setItem('user_avatar', avatarUrl);
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
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_nombre');
    localStorage.removeItem('user_email');
    this.loginStatus.next(false);
  }

  isLogged(): boolean {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('user_token');
    return token !== null;
  }
  return false;
  }
}
