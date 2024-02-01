import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Scroll } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled: boolean = false;
  isMenuOpen: boolean = false;

 

  constructor(private elRef: ElementRef) {
    
    
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  //menu responsive 
  @ViewChild('mainMenu') mainMenuRef?: ElementRef;
  //menu lg
  @ViewChild('lgMenu') lgMenuRef?: ElementRef;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  
    if (this.mainMenuRef) { // Verificamos si mainMenuRef tiene un valor
      this.mainMenuRef.nativeElement.classList.toggle('hidden');
    
    }
  }
  
  closeMenu() {
    this.isMenuOpen = false;
  }
  //end menu responsive
  //scroll move action responsive
  ngAfterViewInit() {
    this.mainMenuRef?.nativeElement.addEventListener('click', (event: MouseEvent) => {
      const clickedElement = event.target as Element; // Conversión a Element
  
      if (clickedElement.tagName === 'A') {
        event.preventDefault();
        const targetSectionId = clickedElement?.getAttribute('href')?.substring(1);
        if (targetSectionId) {
        const targetSection = document.getElementById(targetSectionId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
           
          });
        }
      }
      }
    });
    //scroll move action lg
    this.lgMenuRef?.nativeElement.addEventListener('click', (event: MouseEvent) => {
      const clickedElement = event.target as Element; // Conversión a Element
  
      if (clickedElement.tagName === 'A') {
        event.preventDefault();
        const targetSectionId = clickedElement?.getAttribute('href')?.substring(1);
        if (targetSectionId) {
        const targetSection = document.getElementById(targetSectionId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
           
          });
        }
      }
      }
    });
  }
 
}


 
  

