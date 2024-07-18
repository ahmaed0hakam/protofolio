import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ MatIconModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

  expandedMenu = false
  private lastScrollTop: number = 0;

  constructor(
    private el: ElementRef, private renderer: Renderer2
  ){

  }

  toggleMenu() {
    this.expandedMenu = !this.expandedMenu
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navBar = this.el.nativeElement.querySelector('nav');
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop && st > 90) {
      // Scrolling down and more than 90px
      this.renderer.setStyle(navBar, 'top', '-59px'); // Adjust this value as needed
    } else {
      // Scrolling up
      this.renderer.setStyle(navBar, 'top', '20px');
    }
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }
}
