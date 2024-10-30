import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-greeting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-greeting.component.html',
  styleUrl: './header-greeting.component.css'
})
export class HeaderGreetingComponent {
  @Input() usuario: { nombre: string, role:string }= { nombre: '', role:'' };
}
