import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import CarrouselComponent, { Item } from '@app/ui/carrousel/carrousel.component';

@Component({
  selector: 'app-daybyday-desktop',
  standalone: true,
  imports: [
    CommonModule,
    CarrouselComponent,
  ],
  templateUrl: './day-by-day.desktop.component.html',
  styleUrls: ['./day-by-day.desktop.component.scss'],
})
export default class DayByDayDesktopComponent {

  readonly items: Item[] = [
    {
      id: 0,
      image: 'assets/images/daybyday-1.jpg',
      description: 'Reinado Cuyabro.'
    },
    {
      id: 1,
      image: 'assets/images/daybyday-2.jpg',
      description: 'Desfile cuyabro'
    },
    {
      id: 2,
      image: 'assets/images/daybyday-3.jpg',
      description: 'Desfile de caballitos de palo'
    },
    {
      id: 3,
      image: 'assets/images/daybyday-4.jpg',
      description: 'Concuros duetos hermanos Moncada'
    }
  ];
}
