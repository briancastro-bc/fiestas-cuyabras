import { Component, ViewEncapsulation, inject } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

import TimelineDesktopComponent from './desktop/timeline.desktop.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgIf,
    TimelineDesktopComponent,
  ],
  template: `
    <app-timeline-desktop
      *ngIf="deviceDetector.isDesktop() || deviceDetector.isTablet()"/>
  `
})
export default class TimelineComponent {
  readonly deviceDetector = inject<DeviceDetectorService>(DeviceDetectorService);
}
