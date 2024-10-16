/*import { Component, inject, OnInit } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
import { ToastrService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contenido-management',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './contenido-management.component.html',
  styleUrl: './contenido-management.component.css'
})
export class ContenidoManagementComponent implements OnInit{

  contenidos: any[] = []; // Aquí se almacenarán los contenidos del curso
  nuevoContenido: any = {
    title: '',
    description: ''
  };

  private contenidoService = inject(ContenidoService);
  private toastr = inject(ToastrService)

  editandoContenido: any = null;

  constructor() {}

  ngOnInit(): void {
    this.obtenerContenidos();
  }

  // Obtener todos los contenidos del curso
  obtenerContenidos() {
    this.contenidoService.getContenidos().subscribe(
      (data: any[]) => {
        this.contenidos = data;
      },
      (error) => {
        console.error('Error al obtener los contenidos', error);
        this.toastr.error('Error al obtener los contenidos');
      }
    );
  }

  // Agregar nuevo contenido
  agregarContenido() {
    this.contenidoService.agregarContenido(this.nuevoContenido).subscribe(
      (data) => {
        this.contenidos.push(data);
        this.nuevoContenido = { title: '', description: '' }; // Resetear formulario
        this.toastr.success('Contenido agregado con éxito');
      },
      (error) => {
        console.error('Error al agregar el contenido', error);
        this.toastr.error('Error al agregar contenido');
      }
    );
  }

  // Editar contenido existente
  iniciarEdicion(contenido: any) {
    this.editandoContenido = { ...contenido };
  }

  guardarEdicion() {
    this.contenidoService.actualizarContenido(this.editandoContenido._id, this.editandoContenido).subscribe(
      () => {
        const index = this.contenidos.findIndex(c => c._id === this.editandoContenido._id);
        this.contenidos[index] = this.editandoContenido;
        this.editandoContenido = null; // Salir del modo edición
        this.toastr.success('Contenido actualizado con éxito');
      },
      (error) => {
        console.error('Error al actualizar el contenido', error);
        this.toastr.error('Error al actualizar contenido');
      }
    );
  }

  // Eliminar contenido
  eliminarContenido(id: string) {
    this.contenidoService.eliminarContenido(id).subscribe(
      () => {
        this.contenidos = this.contenidos.filter(c => c._id !== id);
        this.toastr.success('Contenido eliminado con éxito');
      },
      (error) => {
        console.error('Error al eliminar el contenido', error);
        this.toastr.error('Error al eliminar contenido');
      }
    );
  }
}*/
