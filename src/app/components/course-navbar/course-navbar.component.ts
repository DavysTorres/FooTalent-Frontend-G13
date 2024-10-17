import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-course-navbar',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './course-navbar.component.html',
  styleUrl: './course-navbar.component.css',
})
export class CourseNavbarComponent implements AfterViewInit {
  @ViewChild('carouselInner', { static: false }) carouselInner!: ElementRef;
  currentIndex: number = 0;
  itemsToShow: number = 5;
  totalItems: number = 0;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.totalItems = this.carouselInner.nativeElement.children.length;
  }

  // Mover hacia la izquierda
  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }

  // Mover hacia la derecha
  next(): void {
    if (this.currentIndex < this.totalItems - this.itemsToShow) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  // Actualiza la posición del carrusel
  updateCarousel(): void {
    const carousel = this.carouselInner.nativeElement as HTMLElement;
    const itemWidth = carousel.clientWidth / this.totalItems;
    const translateX = -(itemWidth * this.currentIndex * this.itemsToShow);
    carousel.style.transform = `translateX(${translateX}px)`;
  }
}
