import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crear-curso-tarjeta',
  standalone: true,
  imports: [],
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
      this.clickHandler();
    } else if (this.botonUrl) {
      window.location.href = this.botonUrl;
    }
  }

}
