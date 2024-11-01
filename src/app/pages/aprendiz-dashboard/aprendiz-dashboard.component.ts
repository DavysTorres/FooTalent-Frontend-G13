import { Component, inject, Input } from '@angular/core';
import { PanelDeControlComponent } from '../../components/panel-de-control/panel-de-control.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { CourseNavbarComponent } from '../../components/course-navbar/course-navbar.component';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/curso.model';
import { CommonModule } from '@angular/common';
import { CursoTarjetaMovibleComponent } from '../../components/curso-tarjeta-movible/curso-tarjeta-movible.component';
import { UsersService } from '../../services/users.service';
import { CourseViewcardComponent } from '../../components/course-viewcard/course-viewcard.component';
import { HeaderGreetingComponent } from '../../components/header-greeting/header-greeting.component';
import { SuscripcionService } from '../../services/suscripcion.service';
import { SaludoComponent } from '../../components/saludo/saludo.component';

@Component({
  selector: 'app-aprendiz-dashboard',
  standalone: true,
  imports: [
    PanelDeControlComponent,
    RouterLinkWithHref,
    CourseNavbarComponent,
    CursoTarjetaMovibleComponent,
    CommonModule,
    RouterModule,
    CourseViewcardComponent,
    HeaderGreetingComponent
  ],
  templateUrl: './aprendiz-dashboard.component.html',
  styleUrls: ['./aprendiz-dashboard.component.css']
})
export class AprendizDashboardComponent {
  cursos: Curso[] = [];
  loading: boolean = true;
  usuario: any | null = null;
  suscripciones: any[] = [];
  cursosSuscritos: any[] = []

  private userService = inject(UsersService);
  private cursoService = inject(CursoService);
  private suscripcionService = inject(SuscripcionService);

  ngOnInit(): void {
    this.obtenerCursos();
    this.obtenerCursosSuscriptos();
  }

  obtenerCursos(): void {
    this.usuario = this.userService.getUsuario();
    this.cursoService.obtenerCursos().subscribe(
      (data) => {
        this.cursos = data.data.map((curso:any)=> ({ ...curso, progreso: null }));
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener los cursos', error);
        this.loading = false;
      }
    );
  }

  obtenerCursosSuscriptos(): void {
    const idUsuario = this.userService.getIdUsuario(); // Verifica que `getIdUsuario()` exista y devuelva el ID
    if (idUsuario) {
      this.suscripcionService.mostrarSuscripciones(idUsuario).subscribe(
        (data) => {
          this.suscripciones = data.data;
          this.cursosSuscritos = this.suscripciones.map(suscripcion => ({
            ...suscripcion.cursos,
            progreso: suscripcion.progreso
          }));
          
          this.loading = false;
          console.log("SUSCRIPCIONES: ", this.cursosSuscritos);
        },
        (error) => {
          console.error('Error al obtener las suscripciones:', error);
          this.loading = false;
        }
      );
    } else {
      console.error('ID de usuario no válido');
    }
  }
}
