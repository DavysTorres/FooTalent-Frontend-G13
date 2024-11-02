import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CursoService } from '../../services/curso.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-curso-tarjeta',
  standalone: true,
  imports: [RouterModule,CommonModule, FontAwesomeModule],
  templateUrl: './curso-tarjeta.component.html',
  styleUrls: ['./curso-tarjeta.component.css']

})
export class CursoTarjetaComponent {
  @Input() curso: any;
  @Output() cursoEliminado = new EventEmitter<void>(); // Emisor de evento para notificar eliminación
  loading = false;

  private dialog = inject(MatDialog);
  

  constructor(private cursoService: CursoService, private location: Location, private library: FaIconLibrary) { 
    this.library.addIcons(faArrowLeft);
  }

  
  goBack(): void {
    this.location.back();
  }

  eliminarCurso(idCurso: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirmar eliminación',
        message: '¿Estás seguro de que deseas eliminar este curso?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.loading = true;
        this.cursoService.eliminarCurso(idCurso).subscribe(
          () => {
            this.cursoEliminado.emit(); // Notifica al componente padre
            this.loading = false;
          },
          error => {
            console.error('Error al eliminar el curso:', error);
            this.loading = false;
          }
        );
      }
    });
  }
}
