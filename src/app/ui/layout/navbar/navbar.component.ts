import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';

import NavbarDesktopComponent from './desktop/navbar.desktop.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    NavbarDesktopComponent,
  ],
  template: `
    <app-navbar-desktop
      *ngIf="deviceDetector.isDesktop() || deviceDetector.isTablet()"/>
  `,
})
export default class NavbarComponent {
  readonly deviceDetector = inject<DeviceDetectorService>(DeviceDetectorService);
}
