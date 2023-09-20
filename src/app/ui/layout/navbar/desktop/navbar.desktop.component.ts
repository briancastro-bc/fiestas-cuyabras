import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-desktop',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
  ],
  providers: [
    TranslateService
  ],
  templateUrl: './navbar.desktop.component.html',
  styleUrls: ['./navbar.desktop.component.scss'],
})
export default class NavbarDesktopComponent {

  private readonly router: Router = inject(Router);

  readonly links: {
    label: string;
    fragment: string;
  }[] = [
    {
      label: "Cronograma",
      fragment: "timeline"
    },
    {
      label: "Día a día",
      fragment: "dayByDay"
    },
    {
      label: "Patrocinadores",
      fragment: "sponsors"
    }
  ]

  navigate(fragment: string): void {
    this.router.navigate(['/'], { fragment });
  }
}
