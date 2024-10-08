import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-validacion-correo',
  standalone: true,
  imports: [HeaderComponent, RouterLinkWithHref],
  templateUrl: './validacion-correo.component.html',
  styleUrl: './validacion-correo.component.css'
})
export class ValidacionCorreoComponent {

}
