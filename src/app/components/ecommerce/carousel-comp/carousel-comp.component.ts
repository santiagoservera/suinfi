import { Component, OnDestroy, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-carousel-comp',
  standalone: true,
  imports: [
  ],
  templateUrl: './carousel-comp.component.html',
  styleUrl: './carousel-comp.component.css'
})

export class CarouselCompComponent implements AfterViewInit, OnDestroy{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  currentIndex: number = 0;
  totalImages: number = 3;
  intervalId: any;
  get galleryContainerStyle(): any {
    return {
      transform: `translateX(${-this.currentIndex * 100}%)`,
      transition: "transform 0.5s ease-in-out"
    };
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.Navigate(1);
      }, 3000);
    }
  }
  ngOnDestroy(): void {
    // Limpia el intervalo al destruir el componente
    if (isPlatformBrowser(this.platformId)) {
      // Coloca aquí el código que usa document
      clearInterval(this.intervalId);
    }
  }
  Navigate(direction: number): void {
    this.currentIndex = (this.currentIndex + direction + this.totalImages) % this.totalImages;
  }
}
