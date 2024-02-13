import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {

  swiperElement = signal<SwiperContainer | null>(null);

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 7,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 60,
        },
      },
      speed: 1000,
      centeredSlides: true,
      allowTouchMove: false,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
