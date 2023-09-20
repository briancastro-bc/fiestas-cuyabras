import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import CarrouselComponent, { Item } from '@app/ui/carrousel/carrousel.component';

@Component({
  selector: 'app-footer-desktop',
  standalone: true,
  imports: [
    CommonModule,
    CarrouselComponent,
  ],
  templateUrl: './footer.desktop.component.html',
  styleUrls: ['./footer.desktop.component.scss']
})
export default class FooterDesktopComponent {
    readonly items: Item[] = [
    {
      id: 0,
      image: 'assets/images/banner.png',
    },
    {
      id: 1,
      image: 'assets/images/banner-2.png',
    },
    {
      id: 2,
      image: 'assets/images/banner-3.png',
    },
    {
      id: 3,
      image: 'assets/images/banner-4.png',
    },
    {
      id: 4,
      image: 'assets/images/banner-5.png',
    }
  ];
}
