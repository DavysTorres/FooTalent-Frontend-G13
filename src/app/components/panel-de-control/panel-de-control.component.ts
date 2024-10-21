import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-de-control',
  standalone: true,
  imports: [RouterLinkWithHref, CommonModule, RouterModule],
  templateUrl: './panel-de-control.component.html',
  styleUrl: './panel-de-control.component.css'
})
export class PanelDeControlComponent implements OnInit{
  private userService = inject(UsersService);
  private router = inject(Router);

  usuario: string | null = null;
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.userService.loginStatus$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      console.log('Estado de login:', loggedIn);
      if (loggedIn) {
        this.loadUserData();
      }
    });
  }

  loadUserData() {
    this.usuario = localStorage.getItem('user_nombre') || 'usuario';
  }

  logout() {
    this.userService.removeToken();
    //this.isLoggedIn = false;
    this.router.navigate(['/inicio-sesion']);
  }
}
