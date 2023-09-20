import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';

import timeline from '@app/application/mocks/timeline';
import { TimelineUI } from '@app/application/dtos/timeline-ui.dto';
import { TimelineBuilder } from '@app/application/builders/timeline.builder';

@Component({
  selector: 'app-timeline-desktop',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './timeline.desktop.component.html',
  styleUrls: ['./timeline.desktop.component.scss'],
})
export default class TimelineDesktopComponent {

  readonly weeks: {
    firstColumn: TimelineUI[],
    secondColumn: TimelineUI[],
  };

  constructor() {
    const { firstColumn, secondColumn } = timeline;

    this.weeks = {
      firstColumn: this.buildTimeline(firstColumn),
      secondColumn: this.buildTimeline(secondColumn),
    };
  }

  private buildTimeline(data: TimelineUI[]): TimelineUI[] {
    const timeline = new TimelineBuilder(data)
      .withExpanded(false)
      .build();
    return timeline;
  }
}
