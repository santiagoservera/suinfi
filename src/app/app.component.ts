import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './pages/softwareFactory/welcome/welcome.component';
import { AlertsService } from './services/alerts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,WelcomeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  constructor(private alertService: AlertsService) {}
  title = 'suinfi';

  showErrorAlert = false;
  showSuccessAlert = false;
  showInfoAlert = false;
  showWarningAlert = false;
  message = '';
  
    ngOnInit() {
      this.alertService.alert$.subscribe((response: any) => {
        this.message = response.message;
        this.showErrorAlert = false;
        this.showSuccessAlert = false;
        this.showInfoAlert = false;
        this.showWarningAlert = false;
  
        switch (response.alertType) {
          case 'error':
            this.showErrorAlert = true;
            break;
          case 'success':
            this.showSuccessAlert = true;
            break;
          case 'info':
            this.showInfoAlert = true;
            break;
          case 'warning':
            this.showWarningAlert = true;
            break;
        }
  
        setTimeout(() => {
          this.showErrorAlert = false;
          this.showSuccessAlert = false;
          this.showInfoAlert = false;
          this.showWarningAlert = false;
        }, response.time);
      });
    }

    closeAlert() {
      this.showErrorAlert = false;
      this.showSuccessAlert = false;
      this.showInfoAlert = false;
      this.showWarningAlert = false;
    }
  }
  




