import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PanelDeControlComponent } from '../../components/panel-de-control/panel-de-control.component';
import { HeaderCursoComponent } from '../../components/header-curso/header-curso.component';
import { CrearCursoTarjetaComponent } from '../../components/crear-curso-tarjeta/crear-curso-tarjeta.component';
import { CrearClaseModalComponent } from '../../components/crear-clase-modal/crear-clase-modal.component';
import { ContenidoService } from '../../services/contenido.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-temario',
  standalone: true,
  imports: [PanelDeControlComponent, CommonModule, HeaderCursoComponent, CrearCursoTarjetaComponent, MatDialogModule],
  providers: [MatDialog],
  templateUrl: './curso-temario.component.html',
  styleUrls: ['./curso-temario.component.css'] // Corregir 'styleUrl' a 'styleUrls'
})
export class CursoTemarioComponent implements OnInit {
  private dialog: MatDialog;
  cursoId: string | null = null;
  clases: any[] = []
  
  constructor(dialog: MatDialog, private contenidoService: ContenidoService, private route: ActivatedRoute, private router: Router) {
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.cursoId = this.route.snapshot.paramMap.get('cursoId');
    if (this.cursoId) {
      
      this.cargarClases(this.cursoId);
    }
  }

  cargarClases(cursoId: string): void {
    this.contenidoService.getContenidos(cursoId).subscribe({
      next: (data: any) => {
        this.clases = data.data;

      },
      error: (error) => {
        console.error('Error al obtener clases:', error);
      }
    });
  }
  navegarAVistaCurso() {
    this.router.navigate(['/vista-curso']);
  }
  openCrearClaseModal = () => {
    const dialogRef = this.dialog.open(CrearClaseModalComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.cursoId) {
        const contenido = {
          ...result,
          cursoId: this.cursoId
        };
        this.contenidoService.agregarContenido(contenido).subscribe({
          next: (response) => {
            // Aquí puedes actualizar la lista de clases si es necesario

            if (this.cursoId) {
              
              this.cargarClases(this.cursoId);
            }
          },
          error: (error) => {
            console.error('Error al crear contenido:', error);
          }
        });
      }
    });
  };

  activeIndex: number | null = null;

  /*clases = [
    {
      titulo: 'Título de la clase 1',
      duracion: '01:57',
      descripcion: 'Descripción breve de la clase 1, que proporciona al usuario un resumen del contenido.',
      imagenUrl: 'https://via.placeholder.com/300x200'
    },
    {
      titulo: 'Título de la clase 2',
      duracion: '02:34',
      descripcion: 'Descripción breve de la clase 2, que proporciona al usuario un resumen del contenido.',
      imagenUrl: 'https://via.placeholder.com/300x200'
    },
    // Agregar más clases si es necesario
  ];
*/
  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
