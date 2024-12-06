import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { MatIcon } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, CardSliderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  host: {
    id : "mainApp",
    'mousemove' : "onMouseMove()"
  }
})
export class AppComponent {
  title = 'your-angular-app';
  skillsPrefix : string = "assets/images/skills/";
  skills = [
    {name: 'Angular', icon: 'Angular.png'},
    {name: 'AngularJS', icon: 'AngularJS.png'},
    {name: 'Flask', icon: 'Flask.png'},
    {name: 'Cakephp', icon: 'Cakephp.png'},
    {name: 'Mysql', icon: 'Mysql.png'},
    {name: 'Sqlite', icon: 'Sqlite.png'},
    {name: 'Sass', icon: 'Sass.png'},
    {name: 'Bootstrap', icon: 'Bootstrap.png'},
    {name: 'CSS', icon: 'CSS3.png'},
    {name: 'HTML', icon: 'Html5.png'},
    {name: 'Javascript', icon: 'Javascript.png'},
    {name: 'Typescript', icon: 'Typescript.png'},
    {name: 'Jquery', icon: 'Jquery.png'},
    {name: 'Python', icon: 'Python.png'},
    {name: 'Java', icon: 'Java.png'},
    {name: 'PHP', icon: 'PHP.png'},
    {name: 'Kotlin', icon: 'Kotlin.png'},
    {name: 'C++', icon: 'C++.png'},
    {name: 'Git', icon: 'Git.png'},
    {name: 'Bitbucket', icon: 'Bitbucket.png'},
    {name: 'Github', icon: 'Github.png'},
    {name: 'Jira', icon: 'Jira.png'},
  ]

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  // @HostListener('mousemove', ['$event'])       line 12 is a replacment
  onMouseMove(event: MouseEvent) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    const angle = x * 360;
    const normalIntroElement = this.el.nativeElement.querySelector('.intro.normal');
    this.renderer.setStyle(normalIntroElement, 'background-image', `linear-gradient(${angle}deg, black, #333, black)`);
  }

  fireArt = false;

  onMouseEnter() {
    if (!this.introCollapsed) {
      this.fireArt = true;
    }
  }

  onMouseLeave() {
    if (!this.introCollapsed) {
      this.fireArt = false;
    }
  }

  introCollapsed: boolean = false;

  toggleIntro() {
    this.introCollapsed = !this.introCollapsed;
    const normalIntroElement = this.el.nativeElement.querySelector('.intro.normal');
    const coolIntroElement = this.el.nativeElement.querySelector('.intro.cool');

    if (this.introCollapsed) {
      
      setTimeout(() => {
        this.renderer.setStyle(normalIntroElement, 'display', 'none');
        this.renderer.setStyle(coolIntroElement, 'display', 'flex');
        this.fireArt = false;

      }, 1000);
    } else {
      setTimeout(() => {
        this.renderer.setStyle(coolIntroElement, 'display', 'none');
        this.renderer.setStyle(normalIntroElement, 'display', 'flex');
      }, 1000);
    }
  }
}
