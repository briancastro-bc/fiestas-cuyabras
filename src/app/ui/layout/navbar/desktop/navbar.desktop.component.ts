import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-desktop',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  providers: [
    TranslateService
  ],
  templateUrl: './navbar.desktop.component.html',
  styleUrls: ['./navbar.desktop.component.scss'],
})
export default class NavbarDesktopComponent {}
