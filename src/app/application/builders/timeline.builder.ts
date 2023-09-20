import { TimelineUI } from '../dtos/timeline-ui.dto';

export class TimelineBuilder {
  private timeline: TimelineUI[] = [];

  constructor(
    readonly data: TimelineUI[],
  ) {
    this.timeline = data;
  }

  withExpanded(value: boolean): InstanceType<typeof TimelineBuilder> {
    this.timeline = this.timeline.map(t => ({...t, expanded: value}));
    return this;
  }

  build(): TimelineUI[] {
    return this.timeline;
  }
}
