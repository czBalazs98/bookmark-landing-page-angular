import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isNavOpened: boolean = false;

  isMobile(): boolean {
    return window.screen.width < 1024;
  }

  openNav() {
    this.isNavOpened = !this.isNavOpened;
    document.body.classList.toggle('mobile-nav-opened');
  }
}
