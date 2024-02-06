import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit{
  ngAfterViewInit() {
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
          center: true,
          items:2,
          loop:true,
          nav: true,
          margin:30,
          responsive:{
              992:{
                  items:3
              },
          1200:{
            items:4
          }
          }
      });
    });
  }
}
