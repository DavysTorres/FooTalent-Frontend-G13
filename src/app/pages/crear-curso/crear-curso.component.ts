import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatDialog } from '@angular/material/dialog';
import { MensajeDialogoComponent } from '../../components/mensaje-dialogo/mensaje-dialogo.component';


@Component({
  selector: 'app-crear-curso',
  standalone: true,
  imports: [RouterModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './crear-curso.component.html',
  styleUrl: './crear-curso.component.css'
})
export class CrearCursoComponent {
  

  curso = {
    nombre: '',
    descripcion: '',
    que_aprenderas: '',
    requisitos: '',
    razon_eleccion: '',
    duracion: '',
    docenteId:''
  };

  private cursoService = inject(CursoService);
  private router = inject(Router);
  private dialog = inject(MatDialog);


  onSubmit() {
    if (this.curso.nombre && this.curso.descripcion) {
      const userId = localStorage.getItem('user_id');
      if (userId) {
        this.curso.docenteId = userId; 
        this.cursoService.crearCurso(this.curso).subscribe(
          (response) => {
            this.dialog.open(MensajeDialogoComponent,{
              data: { title: 'Curso creado exitosamente', content: 'Ya puedes visualizar tu curso en gestión de cursos', isSuccess:true }
            });
            // Redirigir a la vista de gestión de cursos
            this.router.navigate(['/teacher-dashboard']);
            
          },
          (error) => {
            console.error('Error al crear el curso:', error);
            this.dialog.open(MensajeDialogoComponent,{
              data: { title: 'Error al crear el curso', content: 'Por favor, reintenta crear nuevamente el curso', isSuccess:false }
            });
          }
        );
      } else {
        console.error('No se encontró el ID del usuario');
        this.dialog.open(MensajeDialogoComponent,{
          data: { title: 'Error al crear el curso', content: 'Usuario no encontrado', isSuccess:false }
        });
      }
    } else {
      this.dialog.open(MensajeDialogoComponent,{
        data: { title: 'Error al crear el curso', content: 'Campos incompletos', isSuccess:false }
      });
    }
  }
  
}
