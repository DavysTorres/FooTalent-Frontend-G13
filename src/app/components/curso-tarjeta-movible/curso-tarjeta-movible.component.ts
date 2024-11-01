import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Curso } from '../../models/curso.model';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SuscripcionService } from '../../services/suscripcion.service';
import { UsersService } from '../../services/users.service';
import { MensajeDialogoComponent } from '../mensaje-dialogo/mensaje-dialogo.component';

@Component({
  selector: 'app-curso-tarjeta-movible',
  standalone: true,
  imports: [CommonModule, RouterModule, MensajeDialogoComponent],
  templateUrl: './curso-tarjeta-movible.component.html',
  styleUrls: ['./curso-tarjeta-movible.component.css']
})
export class CursoTarjetaMovibleComponent {
  @Input() cursos: Curso[] = [];
  @Input() mostrarProgreso: boolean = false; // Nuevo input
  
  private dialog = inject(MatDialog);
  
  constructor(
    private suscripcionService: SuscripcionService,
    private userService: UsersService
  ) {}

  suscribir(cursoId: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        cursoId,
        title: 'Confirmar inscripción',
        message: '¿Estás seguro de que deseas inscribirte en este curso?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const idUsuario = this.userService.getIdUsuario();
        this.suscripcionService.generarSuscripcion({ idCurso: cursoId, idUsuario }).subscribe(
          response => {
            this.dialog.open(MensajeDialogoComponent, {
              width: '300px',
              data: {
                title: '¡Inscripción exitosa!',
                content: '¡Enhorabuena! Te has inscrito exitosamente en el curso',
                isSuccess: true
              }
            });
          },
          error => {
            const mensajeError = error?.error?.mensaje === 'El usuario ya está suscrito a este curso'
              ? 'Ya estás inscrito en este curso.'
              : 'Hubo un problema con la inscripción. Inténtalo más tarde.';

            this.dialog.open(MensajeDialogoComponent, {
              width: '300px',
              data: {
                title: 'Error de inscripción',
                content: mensajeError,
                isSuccess: false
              }
            });
          }
        );
      }
    });
  }
}
