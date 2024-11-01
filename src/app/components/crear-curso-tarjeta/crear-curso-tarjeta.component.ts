import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crear-curso-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crear-curso-tarjeta.component.html',
  styleUrl: './crear-curso-tarjeta.component.css'
})
export class CrearCursoTarjetaComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() botonUrl: string = '';
  @Input() clickHandler?: () => void;

  onClick() {
    if (this.clickHandler) {

      console.log("Entre a clickHandler")
      this.clickHandler();
    } else if (this.botonUrl) {
      window.location.href = this.botonUrl;
    }
  }

}
