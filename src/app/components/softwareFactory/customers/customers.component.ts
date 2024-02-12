import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent /* implements AfterViewInit  */ {
  constructor() { }

  /* ngAfterViewInit(): void {
    var copy = document.querySelector('.customers-slide')?.cloneNode(true);
    var parent = document.querySelector(".customers");
    if (copy && parent) {
      parent.appendChild(copy);
    }
  } */
}
