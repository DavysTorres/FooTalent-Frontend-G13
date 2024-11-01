import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CursoService } from '../../services/curso.service';
import { UsersService } from '../../services/users.service';
import { CursoTarjetaComponent } from '../../components/curso-tarjeta/curso-tarjeta.component';
import { CommonModule } from '@angular/common';
import { PanelDeControlComponent } from '../../components/panel-de-control/panel-de-control.component';
import { HeaderGreetingComponent } from '../../components/header-greeting/header-greeting.component';
import { CrearCursoTarjetaComponent } from '../../components/crear-curso-tarjeta/crear-curso-tarjeta.component';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, PanelDeControlComponent, CursoTarjetaComponent, CommonModule, HeaderGreetingComponent, CrearCursoTarjetaComponent],
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']  // Corrección: 'styleUrls' en plural
})
export class TeacherDashboardComponent implements OnInit {

  cursos: any[] = [];
  idUsuario: string | null = null;
  usuario: any| null = null;

  constructor(private cursoService: CursoService, private usuarioService: UsersService) { }

  ngOnInit(): void {
    this.idUsuario = this.usuarioService.getIdUsuario();
    this.usuario = this.usuarioService.getUsuario()

    // Validación de idUsuario para asegurarnos de que no es null
    if (this.idUsuario) {
      this.obtenerCursosPropios(this.idUsuario);
    } else {
      console.error('No se encontró un ID de usuario');
    }
  }

  obtenerCursosPropios(idUsuario: string): void {  // Tipado de 'idUsuario' como string
    this.cursoService.obtenerCursoPorIdUsuario(idUsuario).subscribe(
      (response: any) => {
        this.cursos = response.data.filter((curso: any) => curso.activo === true);  // Manejo seguro de 'response.data'
      },
      error => {
        console.error('Error al obtener los cursos:', error);
      }
    );
  }
  redirectToPage() {
    window.location.href = '/crear-curso';
  }
}
