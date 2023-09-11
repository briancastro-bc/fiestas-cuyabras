import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';

import MainDesktopComponent from './desktop/main.desktop.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgIf,
    MainDesktopComponent
  ],
  template: `
    <app-main-desktop
      *ngIf="deviceDetector.isDesktop() || deviceDetector.isTablet()"/>
  `,
})
export default class MainComponent {
  readonly deviceDetector = inject<DeviceDetectorService>(DeviceDetectorService);
}
