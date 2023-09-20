import { Component, ViewEncapsulation, inject } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

import DayByDayDesktopComponent from './desktop/day-by-day.desktop.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-daybyday',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgIf,
    DayByDayDesktopComponent,
  ],
  template: `
    <app-daybyday-desktop
      *ngIf="deviceDetector.isDesktop() || deviceDetector.isTablet()"/>
  `,
})
export default class DayByDayComponent {
  readonly deviceDetector = inject<DeviceDetectorService>(DeviceDetectorService);
}
