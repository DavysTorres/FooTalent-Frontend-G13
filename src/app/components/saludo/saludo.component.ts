import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  private usersService = inject(UsersService)

  usuario: string | null = null;
  isLoggedIn: boolean = false

  ngOnInit() {
    this.usersService.loginStatus$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      if (loggedIn) {
        this.loadUserData();
      }
    });
  }

  loadUserData() {
    this.usuario = localStorage.getItem('user_nombre') || 'usuario';
  }
}
