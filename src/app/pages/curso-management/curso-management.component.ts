import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { ProgressSpinnerOverviewComponent } from '../../components/progress-spinner-overview/progress-spinner-overview.component';

@Component({
  selector: 'app-curso-management',
  standalone: true,
  imports: [RouterModule, CommonModule, ProgressSpinnerOverviewComponent],
  templateUrl: './curso-management.component.html',
  styleUrl: './curso-management.component.css'
})
export class CursoManagementComponent implements OnInit {

  cursos: any[] = [];
  idUsuario: string | null = null;
  private dialog = inject(MatDialog);
  loading = false

  constructor(private cursoService: CursoService, private usuarioService: UsersService) { }

  ngOnInit(): void {
    this.idUsuario = this.usuarioService.getIdUsuario();
    this.obtenerCursosPropios(this.idUsuario);  // Llama a la función para obtener los cursos al inicializar el componente
  }

  obtenerCursos(): void {
    this.cursoService.obtenerCursos().subscribe((response: any) => {
      this.cursos = response.data;  // Asigna los cursos a la propiedad
    });
  }

  obtenerCursosPropios(idUsuario:any): void {

    this.cursoService.obtenerCursoPorIdUsuario(idUsuario).subscribe((response: any) => {
      this.cursos = response.data.filter((curso: any) => curso.activo === true);
    });

  }

  eliminarCurso(idCurso: string): void {
    // Abrir diálogo de confirmación
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirmar eliminación',
        message: '¿Estás seguro de que deseas eliminar este curso?'
      }
    });

    // Después de cerrar el diálogo, realizar la eliminación si el usuario confirma
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.loading = true; 
        // Si el usuario confirma, llamar al servicio para eliminar el curso
        this.cursoService.eliminarCurso(idCurso).subscribe(
          (response: any) => {
            console.log('Curso eliminado:', response);
            // Actualizar la lista de cursos después de la eliminación
            this.obtenerCursosPropios(this.idUsuario); // Refrescar la lista de cursos
            this.loading = false;
          },
          (error: any) => {
            console.error('Error al eliminar el curso:', error);
            this.loading = false; 
          }
        );
      } else {
        console.log('Eliminación cancelada por el usuario');
      }
    });
  }


}

