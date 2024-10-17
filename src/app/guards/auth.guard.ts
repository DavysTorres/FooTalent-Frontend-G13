import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../services/users.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private userService = inject(UsersService);
  private router = inject(Router);

  constructor() {}

  canActivate(): boolean {
    if (!this.userService.isLogged()) {
      return true; // Si no está logueado, puede acceder
    } else {
      this.router.navigate(['/']); // Redirige a la página principal o dashboard
      return false;
    }
  }
}
