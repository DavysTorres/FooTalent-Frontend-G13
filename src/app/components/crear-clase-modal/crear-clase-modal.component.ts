
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-clase-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-clase-modal.component.html',
  styleUrl: './crear-clase-modal.component.css'
})
export class CrearClaseModalComponent {
  titulo: string = '';
  video: string = '';
  descripcion: string = '';

  constructor(private dialogRef: MatDialogRef<CrearClaseModalComponent>) {}

  onSubmit() {
    if (this.titulo) {
      this.dialogRef.close({ titulo: this.titulo, video: this.video, descripcion: this.descripcion });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
