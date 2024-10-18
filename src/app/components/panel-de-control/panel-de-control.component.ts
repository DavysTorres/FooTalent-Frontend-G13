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



  logout() {
    this.userService.removeToken();
    //this.isLoggedIn = false;
    this.router.navigate(['/inicio-sesion']);
  }
}
