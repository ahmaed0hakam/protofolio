import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CardSliderComponent } from './card-slider/card-slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, CardSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  host: {
    id : "mainApp",
    'mousemove' : "onMouseMove()"
  }
})
export class AppComponent {
  title = 'your-angular-app';
  private skillsPrefix : string = "../assets/images/skills/";
  skills = [
    {name: 'Angular', link: this.skillsPrefix + 'Angular.png'},
    {name: 'AngularJS', link: this.skillsPrefix + 'AngularJS.png'},
    {name: 'Flask', link: this.skillsPrefix + 'Flask.png'},
    {name: 'Cakephp', link: this.skillsPrefix + 'Cakephp.png'},
    {name: 'Mysql', link: this.skillsPrefix + 'Mysql.png'},
    {name: 'Sqlite', link: this.skillsPrefix + 'Sqlite.png'},
    {name: 'Sass', link: this.skillsPrefix + 'Sass.png'},
    {name: 'Bootstrap', link: this.skillsPrefix + 'Bootstrap.png'},
    {name: 'CSS', link: this.skillsPrefix + 'CSS3.png'},
    {name: 'HTML', link: this.skillsPrefix + 'Html5.png'},
    {name: 'Javascript', link: this.skillsPrefix + 'Javascript.png'},
    {name: 'Typescript', link: this.skillsPrefix + 'Typescript.png'},
    {name: 'Jquery', link: this.skillsPrefix + 'Jquery.png'},
    {name: 'Python', link: this.skillsPrefix + 'Python.png'},
    {name: 'Java', link: this.skillsPrefix + 'Java.png'},
    {name: 'PHP', link: this.skillsPrefix + 'PHP.png'},
    {name: 'Kotlin', link: this.skillsPrefix + 'Kotlin.png'},
    {name: 'C++', link: this.skillsPrefix + 'C++.png'},
    {name: 'Git', link: this.skillsPrefix + 'Git.png'},
    {name: 'Bitbucket', link: this.skillsPrefix + 'Bitbucket.png'},
    {name: 'Github', link: this.skillsPrefix + 'Github.png'},
    {name: 'Jira', link: this.skillsPrefix + 'Jira.png'},
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
