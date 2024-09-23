import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/user.model';

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

  setToken(token: string){
    localStorage.setItem('user_token', token);
    return;
  }

  removeToken(){
    localStorage.removeItem('user_token');
    return;
  }
}
