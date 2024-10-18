import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, FooterComponent, RouterModule, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  searchTerm: string = '';
  courses = [
    { id: 1, name: 'PHP y Bases de datos', img: '/assets/images/php.png' },
    { id: 2, name: 'Diseño web', img: '/assets/images/html.png' },
    { id: 3, name: 'Python', img: '/assets/images/python.png' },
    { id: 4, name: 'Java', img: '/assets/images/java.png' },
    { id: 5, name: 'Javascript', img: '/assets/images/javascript.png' },
    { id: 6, name: 'C++', img: '/assets/images/c.png' },
  ];
  
  filteredCourses = [...this.courses];  // Inicializa con todos los cursos

  filterCourses() {
    this.filteredCourses = this.courses.filter(course => 
      course.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
