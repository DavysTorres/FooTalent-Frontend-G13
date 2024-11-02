import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-course-navbar',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './course-navbar.component.html',
  styleUrl: './course-navbar.component.css',
})
export class CourseNavbarComponent {
  @ViewChild('carouselInner', { static: false }) carouselInner!: ElementRef;

  // Tamaño del desplazamiento (ajústalo según el tamaño de cada tarjeta en el carrusel)
  scrollAmount: number = 100;

  scrollLeft() {
    if (this.carouselInner) {
      this.carouselInner.nativeElement.scrollBy({
        left: -this.scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  scrollRight() {
    if (this.carouselInner) {
      this.carouselInner.nativeElement.scrollBy({
        left: this.scrollAmount,
        behavior: 'smooth',
      });
    }
  }
}
