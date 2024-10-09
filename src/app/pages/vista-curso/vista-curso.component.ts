import { Component } from '@angular/core';
import { PanelDeControlComponent } from '../../components/panel-de-control/panel-de-control.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-vista-curso',
  standalone: true,
  imports: [PanelDeControlComponent, RouterLinkWithHref],
  templateUrl: './vista-curso.component.html',
  styleUrl: './vista-curso.component.css'
})
export class VistaCursoComponent {

}
