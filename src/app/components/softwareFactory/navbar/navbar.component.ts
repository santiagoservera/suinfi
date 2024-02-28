import { CommonModule,  } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { Scroll } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled: boolean = false;
  isMenuOpen: boolean = false;
  isHomeActive = false;
  path? : string;

  constructor(private elRef: ElementRef, private router: Router, public translate: TranslateService) {

    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'en');
    
    
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
  //close menu
  closeMenu() {
    this.isMenuOpen = false;
  }
  //end menu responsive

  
  //submenu-pages responsive
  isPagesDropdownOpen: boolean = false;

  @HostListener('click') openPagesDropdown() {
    this.isPagesDropdownOpen = true;
  }

  @HostListener('document:click', ['$event'])
closePagesDropdown(event: Event) {
  if (!((event.target as HTMLElement).closest('.pages-dropdown') ||
      (event.target as HTMLElement).classList.contains('pages-dropdown'))) {
    this.isPagesDropdownOpen = false;
  }
}

  //scroll move action responsive
  ngAfterViewInit() {
    this.path = this.router.url;
    
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
      const clickedElement = event.target as Element;
  
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


 
  

