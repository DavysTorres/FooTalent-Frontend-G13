//Cspell:disable

import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  private userService = inject(UsersService);
  private router = inject(Router);


  isLoggedIn: boolean = false;
  userAvatar: string | null = null;
  userName: string | null = null;
  menuOpen: boolean = false;
  userRole: string | null = null;
  profileLink: string ='/default-dashboard';

  constructor() {}

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
    this.userName = localStorage.getItem('user_nombre') || 'usuario';
    //this.userAvatar = localStorage.getItem('user_avatar') || '/assets/images/default-avatar.png';
    this.userRole = localStorage.getItem('user_role');

    console.log('Rol de usuario:', this.userRole);

    if (this.userRole === 'Docente') {
      this.profileLink = '/teacher-dashboard';
    } else if (this.userRole === 'Aprendiz') {
      this.profileLink = '/aprendiz-dashboard';
    } else {
      this.profileLink = '/default-dashboard';
    }

    console.log('Profile Link:', this.profileLink);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.userService.removeToken();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }


}
