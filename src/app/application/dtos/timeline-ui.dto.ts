import { Timeline } from '../../domain/timeline';

export interface TimelineUI extends Timeline {
  expanded?: boolean;
}
