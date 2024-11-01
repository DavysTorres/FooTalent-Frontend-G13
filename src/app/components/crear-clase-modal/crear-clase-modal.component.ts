
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
  videoUrl: string = '';

  constructor(private dialogRef: MatDialogRef<CrearClaseModalComponent>) {}

  onSubmit() {
    if (this.titulo && this.videoUrl) {
      this.dialogRef.close({ titulo: this.titulo, videoUrl: this.videoUrl });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
