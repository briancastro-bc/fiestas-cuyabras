import { CommonModule, NgIf, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

export interface Item {
  id: number;
  image: string;
  description?: string;
}

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, NgIf],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export default class CarrouselComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input('items') items: Item[] = [];

  @Input('actions') showActions: boolean = true;

  @Input('slideInterval') slideInterval: number = 5000;

  currentIndex: number = 0;

  interval$!: Observable<number>;

  private subscriptions: Subscription[] = [];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.interval$ = interval(this.slideInterval);
    this.subscriptions.push(
      this.interval$
        .subscribe(_ => this.next())
    );
  }

  next(): void {
    this.currentIndex = (this.currentIndex === this.items.length - 1) ? this.currentIndex = 0 : this.currentIndex + 1;
  }

  previous(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.items.length - 1 : this.currentIndex - 1;
  }

  selectItem(index: number): void {
    this.currentIndex = index;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
