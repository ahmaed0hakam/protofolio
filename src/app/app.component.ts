import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { MatIcon } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';

interface Experience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  descriptionPoints: string[];
  duration?: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, CardSliderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  host: {
    id: "mainApp",
    'mousemove': "onMouseMove()"
  }
})
export class AppComponent {
  fireArt: boolean = false;
  introCollapsed: boolean = false;

  skillsPrefix: string = "assets/images/skills/";
  skills = [
    { name: 'Angular', icon: 'Angular.png' },
    { name: 'AngularJS', icon: 'AngularJS.png' },
    { name: 'RxJs', icon: 'RxJs.png' },
    { name: 'Flask', icon: 'Flask.png' },
    { name: 'Cakephp', icon: 'Cakephp.png' },
    { name: 'Mysql', icon: 'Mysql.png' },
    { name: 'Sqlite', icon: 'Sqlite.png' },
    { name: 'Sass', icon: 'Sass.png' },
    { name: 'Bootstrap', icon: 'Bootstrap.png' },
    { name: 'CSS', icon: 'CSS3.png' },
    { name: 'HTML', icon: 'Html5.png' },
    { name: 'Javascript', icon: 'Javascript.png' },
    { name: 'Typescript', icon: 'Typescript.png' },
    { name: 'Jquery', icon: 'Jquery.png' },
    { name: 'Python', icon: 'Python.png' },
    { name: 'Java', icon: 'Java.png' },
    { name: 'PHP', icon: 'PHP.png' },
    { name: 'Kotlin', icon: 'Kotlin.png' },
    { name: 'C++', icon: 'C++.png' },
    { name: 'Git', icon: 'Git.png' },
    { name: 'Bitbucket', icon: 'Bitbucket.png' },
    { name: 'Github', icon: 'Github.png' },
    { name: 'Jira', icon: 'Jira.png' },
  ]

  experiences: Experience[] = [
    {
      company: 'Classera',
      position: 'Software Engineer',
      startDate: new Date('2023-02-22'),
      descriptionPoints: [
        `Specialized in Angular (version 16+) and AngularJS, utilizing RxJS for asynchronous data management and 
        Angular Material for UI components. Integrated Form.io as an iframe and SDK, as well as Go1 and Alison 
        for course material, and implemented drag-and-drop features with Dragula.`,

        `Worked on backend development with CakePHP and MySQL for 2 months, alongside frontend 
        responsibilities.`,

        `Created numerous reusable components in Angular, enhancing development efficiency and consistency.`,

        `Conducted thorough testing and debugging to ensure robust, high-quality web applications.`,

        `Supervised and mentored 5 new joiners on Angular and AngularJS projects for 4-5 months.`
      ]
    }
  ];

  /**
   * Calculates the duration between two dates in years and months.
   * If no end date is provided, the current date is used.
   * 
   * @param {Date} startDate - The start date of the period.
   * @param {Date} [endDate] - The optional end date of the period.
   * @returns {string} - A string representing the duration in the format of "X years and Y months" or "Less than a month".
   */
  calculateDuration(startDate: Date, endDate?: Date): string {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diff = end.getTime() - start.getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

    const yearText = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthText = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

    return `${yearText}${years && months ? ' and ' : ''}${monthText}` || 'Less than a month';
  }


  /**
   * Constructor for the AppComponent class.
   * Updates the experiences with calculated durations.
   * 
   * @param {Renderer2} renderer - Angular's Renderer2 for DOM manipulation.
   * @param {ElementRef} el - Reference to the root element of the component.
   */
  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.experiences = this.experiences.map(experience => ({
      ...experience,
      duration: this.calculateDuration(experience.startDate, experience.endDate)
    }));
  }

  /**
   * Handles the `mousemove` event.
   * Adjusts the background gradient of an element based on cursor position.
   * 
   * @param {MouseEvent} event - The mouse event object.
   */
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    const angle = x * 360;
    const normalIntroElement = this.el.nativeElement.querySelector('.intro.normal');
    this.renderer.setStyle(normalIntroElement, 'background-image', `linear-gradient(${angle}deg, black, #333, black)`);
  }

  /**
   * Activates the artistic animation when the mouse enters the intro area.
   */
  onMouseEnter(): void {
    if (!this.introCollapsed) {
      this.fireArt = true;
    }
  }

  /**
   * Deactivates the artistic animation when the mouse leaves the intro area.
   */
  onMouseLeave(): void {
    if (!this.introCollapsed) {
      this.fireArt = false;
    }
  }

  /**
   * Toggles the state of the intro section between collapsed and expanded.
   * Applies different styles and triggers animations.
   */
  toggleIntro(): void {
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
