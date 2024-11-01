import { Component } from '@angular/core';
import { PanelDeControlComponent } from '../../components/panel-de-control/panel-de-control.component';
import { CommonModule } from '@angular/common';
import { HeaderCursoComponent } from '../../components/header-curso/header-curso.component';
import { CrearCursoTarjetaComponent } from '../../components/crear-curso-tarjeta/crear-curso-tarjeta.component';
import { MatDialog } from '@angular/material/dialog';
import { CrearClaseModalComponent } from '../../components/crear-clase-modal/crear-clase-modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-curso-temario',
  standalone: true,
  imports: [PanelDeControlComponent, CommonModule, HeaderCursoComponent,CrearCursoTarjetaComponent, MatDialogModule ],
  templateUrl: './curso-temario.component.html',
  styleUrl: './curso-temario.component.css'
})
export class CursoTemarioComponent {


  constructor(private dialog: MatDialog) {}

  openCrearClaseModal() {
    const dialogRef = this.dialog.open(CrearClaseModalComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Clase creada:', result); // Aquí puedes manejar los datos (guardar en el backend, etc.)
      }
    });
  }



  activeIndex: number | null = null;

  clases = [
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

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

}
