
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mensaje-dialogo',
  templateUrl: './mensaje-dialogo.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, CommonModule],
  styleUrls: ['./mensaje-dialogo.component.css']
})
export class MensajeDialogoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, content: string, redirectTo: string, isSuccess:boolean },
    private dialogRef: MatDialogRef<MensajeDialogoComponent>,
    private router: Router) { }

    onClose(): void {
      this.dialogRef.close(true);
      //this.router.navigate([this.data.redirectTo]); // Cambia '/target-page' a la ruta deseada
    }
}
