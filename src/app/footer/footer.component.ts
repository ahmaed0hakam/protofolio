import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'main-footer',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  expandedFooter = true;

  iconsPrefix : string = "assets/images/icons/";
  socialSites : {name : string, link: string, icon: string}[] = [
    {name: 'Instagram', link: 'https://www.instagram.com/ahmaed.alhafi/', icon: 'instagram'},
    {name: 'Facebook', link: 'https://www.facebook.com/ahmaed.alhafi/', icon: 'facebook'},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/ahmaed-alhafi/', icon: 'linkedin'},
    {name: 'Twitter', link: 'https://twitter.com/ahmaed_hakam', icon: 'twitter'},
    {name: 'G+', link: 'https://support.google.com/answer/2451065?hl=en', icon: 'g+'},
  ]

  toggleFooter() {
    this.expandedFooter = !this.expandedFooter
  }

}
