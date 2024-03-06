import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent  {
  constructor(private router: Router){}

  isLoginPage(): boolean {
    return this.router.url === '/auth/login'
  }

}


