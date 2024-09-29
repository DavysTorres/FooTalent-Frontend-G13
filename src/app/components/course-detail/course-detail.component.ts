import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courseId: string | null = null; // Inicializa courseId

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtén el parámetro 'id' de la ruta
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id'); // Asigna el valor a courseId
    });
  }
}
