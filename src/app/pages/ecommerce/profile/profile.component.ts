import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';
import { NavbarCompComponent } from '../../../components/ecommerce/navbar-comp/navbar-comp.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarCompComponent, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private router: Router){}


  showSectionSecurity() {
    this.router.navigate(['/security']);
  }

}
