import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl,FormGroup} from '@angular/forms';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { Scroll } from '@angular/router';


@Component({
  selector: 'app-navbar-comp',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './navbar-comp.component.html',
  styleUrl: './navbar-comp.component.css'
})
export class NavbarCompComponent {
  
  constructor(private router: Router) {}

  contactForm = new FormControl('');


  search() {
    
    this.router.navigate(['/ecommerce/search'], { queryParams: { query: this.contactForm.value } });
    
  }

  ngAfterViewInit(): void {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
  
    btn?.addEventListener("click", () => {
      menu?.classList.toggle("hidden");
    });
  }
}
