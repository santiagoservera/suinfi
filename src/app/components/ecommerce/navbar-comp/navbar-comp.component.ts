import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-navbar-comp',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet],
  templateUrl: './navbar-comp.component.html',
  styleUrl: './navbar-comp.component.css'
})
export class NavbarCompComponent {
  ngAfterViewInit(): void {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
  
    btn?.addEventListener("click", () => {
      menu?.classList.toggle("hidden");
    });
  }
}
