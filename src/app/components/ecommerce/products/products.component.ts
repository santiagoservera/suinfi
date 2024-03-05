import { Component , OnInit, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Swiper, SwiperOptions } from 'swiper/types';
import { SwiperContainer, register } from 'swiper/element';
register();


import {ArticulosApiService} from '../../../services/articulos-api.service'
import { IArticles } from '../../../models/article.model';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  swiperElement = signal<SwiperContainer | null>(null);
  articlesList = signal<any>([])

  constructor(private articulosApi:ArticulosApiService){}

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-1');
    const swiperElemConstructor2 = document.querySelector('.swiper-2');
    const swiperElemConstructor3 = document.querySelector('.swiper-3');
    const swiperOptions: SwiperOptions = {
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    Object.assign(swiperElemConstructor2!, swiperOptions);
    Object.assign(swiperElemConstructor3!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement.set(swiperElemConstructor2 as SwiperContainer);
    this.swiperElement.set(swiperElemConstructor3 as SwiperContainer);
    this.swiperElement()?.initialize();

    this.articulosApi.getData().subscribe((data:any) =>{
      // Convertir los datos de Buffer a ArrayBuffer
      const dataImg = data.map((img: any) => {
        const arrayBuffer = new Uint8Array(img?.imagen1?.data).buffer;

        // Convertir el ArrayBuffer a Uint8Array
        const uint8Array = new Uint8Array(arrayBuffer);

        // Convertir los datos binarios en una cadena base64
        let binaryString = '';
        uint8Array.forEach((byte) => {
          binaryString += String.fromCharCode(byte);
        });
        const base64Data = btoa(binaryString);

        const dataUrl = `data:image/png;base64,${base64Data}`;
        

        return {
          id: img.id,
          imagenNew: dataUrl,
        };
      });
      
      const dataNew = data.map((item: any) => {
        return {
          ...item,
          imagen: dataImg.map((itemImg: any) => {
            return itemImg;
          }),
        };
      });
      this.articlesList.set(dataNew);
      
    })
  }

}
