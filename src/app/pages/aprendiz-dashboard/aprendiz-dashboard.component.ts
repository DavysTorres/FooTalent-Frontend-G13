import { Component, inject, input, Input } from '@angular/core';
import { PanelDeControlComponent } from '../../components/panel-de-control/panel-de-control.component';
import { RouterLinkWithHref } from '@angular/router';
import { CourseNavbarComponent } from '../../components/course-navbar/course-navbar.component';
import { UsersService } from '../../services/users.service';
import { CourseViewcardComponent } from '../../components/course-viewcard/course-viewcard.component';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-aprendiz-dashboard',
  standalone: true,
  imports: [PanelDeControlComponent, RouterLinkWithHref, CourseNavbarComponent, CourseViewcardComponent],
  templateUrl: './aprendiz-dashboard.component.html',
  styleUrl: './aprendiz-dashboard.component.css'
})
export class AprendizDashboardComponent {
  private usersService = inject(UsersService)
  private cursoService = inject(CursoService)


  usuario: string | null = null;
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.usersService.loginStatus$.subscribe((loggedIn) => {
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

}
