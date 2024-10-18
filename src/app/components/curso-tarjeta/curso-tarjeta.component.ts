import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-curso-tarjeta',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './curso-tarjeta.component.html',
  styleUrl: './curso-tarjeta.component.css'
})
export class CursoTarjetaComponent {
  @Input() curso: any;  // Recibe el objeto curso

  constructor() { }
}
