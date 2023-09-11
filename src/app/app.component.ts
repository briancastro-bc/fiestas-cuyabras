import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import NavbarComponent from './ui/layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  template: `
  <div id="app">
    <app-navbar/>

    <svg class="green-bar" viewBox="0 0 1440 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1470.13 286.808C1470.13 286.808 1419.33 222.24 1239.76 180.194C1060.2 138.148 847.077 164.427 847.077 164.427C847.077 164.427 731.783 175.688 471.886 297.321C211.989 418.949 -0.657227 289.809 -0.657227 289.809V-85.5933L1471.65 -84.0928L1470.13 286.803V286.808Z"/>
    </svg>

    <main id="main">
      <router-outlet/>
    </main>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
