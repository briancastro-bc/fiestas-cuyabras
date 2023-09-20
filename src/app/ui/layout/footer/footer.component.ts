import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

import FooterDesktopComponent from './desktop/footer.desktop.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIf,
    FooterDesktopComponent,
  ],
  template: `
    <app-footer-desktop
      *ngIf="deviceDetector.isDesktop() || deviceDetector.isTablet()"/>
  `
})
export default class FooterComponent {
  readonly deviceDetector = inject<DeviceDetectorService>(DeviceDetectorService);
}
