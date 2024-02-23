import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type AlertType = 'error' | 'success' | 'info' | 'warning';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private alertSource = new Subject();
  alert$ = this.alertSource.asObservable();

  constructor() {}

  showAlert(
    message: string,
    time: number = 3000,
    alertType?: AlertType
  ) {
    const type = alertType || 'error'; // Default to 'error' if no type provided
    this.alertSource.next({ message, time, alertType: type });
  }
}
