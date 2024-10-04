import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  course = {
    name: '',
    description: '',
    duration: ''
  };

  onSubmit() {
    console.log(this.course);
    // Aquí puedes enviar los datos al backend
  }
}
