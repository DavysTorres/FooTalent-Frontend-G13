import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  private userService = inject(UsersService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef)

  isLoggedIn: boolean = false;
  userAvatar: string | null = null;
  userName: string | null = null;
  menuOpen: boolean = false;
  userRole: string | null = null;
  prifileLink: string ='/aprendiz-dashboard';

  constructor() {}

  ngOnInit() {
    this.userService.loginStatus$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      if (loggedIn) {
        this.loadUserData();
      }
    });
  }

  loadUserData() {
    const userName = localStorage.getItem('user_nombre');
    const userRole = localStorage.getItem('user_role')
    this.userName = userName || 'usuario';
    this.userAvatar = localStorage.getItem('user_avatar') || '/assets/images/default-avatar.png';
    this.userRole = userRole;

    if (this.userRole ==='Docente') {
      this.prifileLink = '/teacher-dashboard';
    }else if (this.userRole ==='Aprendiz'){
      this.prifileLink = 'aprndiz-dashboard';
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.userService.removeToken();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }


}
