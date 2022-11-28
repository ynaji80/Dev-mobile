import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mes contacts', url: '/liste-contacts', icon: 'mail' },
    { title: 'Profile', url: '/profile', icon: 'heart' },
    { title: 'Deconnexion', url: '/deconnexion', icon: 'archive' },
    { title: 'Inscription', url: '/inscription', icon: 'trash' },
    { title: 'Authentification', url: '/authentification', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
