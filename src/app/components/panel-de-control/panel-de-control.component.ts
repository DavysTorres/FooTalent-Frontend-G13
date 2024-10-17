import { Component, inject } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-panel-de-control',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './panel-de-control.component.html',
  styleUrl: './panel-de-control.component.css'
})
export class PanelDeControlComponent {

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
