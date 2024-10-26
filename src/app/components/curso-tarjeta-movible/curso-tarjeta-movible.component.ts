import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-curso-tarjeta-movible',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './curso-tarjeta-movible.component.html',
  styleUrl: './curso-tarjeta-movible.component.css'
})
export class CursoTarjetaMovibleComponent {
  @Input() cursos: Curso[] = [];
}
