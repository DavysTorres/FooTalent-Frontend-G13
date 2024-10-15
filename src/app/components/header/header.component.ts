import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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

  isLoggedIn: boolean = false;
  userAvatar: string | null = null;
  userName: string | null = null;
  menuOpen: boolean = false;

  constructor() {}
  ngOnInit() {
    this.checkUserStatus()
  }

  checkUserStatus(){
    if(this.userService.isLogged()){
      this.isLoggedIn = true;
      this.loadUserData();
    } else {
      this.isLoggedIn = false;
    }
  }

  loadUserData() {
    const userId = localStorage.getItem('user_id');
    const userName = localStorage.getItem('user_nombre');
    if(userId){
      this.userName = userName || 'usuario';
      this.userAvatar = '/assets/images/default-avatar.png';
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
