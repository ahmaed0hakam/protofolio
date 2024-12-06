import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'card-slider',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.sass'
})
export class CardSliderComponent {
  cards = [
    {
      title: 'masArI',
      description: 'Specialized web application designed to assist career shifters and returnees in creating personalized learning paths. Using GenAI, our platform curates courses, lessons, and learning paths tailored to individual needs. Additionally, masArI features a cutting-edge learning assistant (chat bot) for interactive guidance.',
      link: 'https://github.com/ahmaed0hakam/Masari',
      figma: 'https://www.figma.com/design/vLhXrcgmwlb0yc5HKiPIdn/Masari-WebApp?node-id=1-6&t=PBWWy7jNjdYurQTj-0',
      logo: 'assets/images/project logos/masari.png',
      slides: 'https://docs.google.com/presentation/d/1YTGZZcoZN6ehW-t8URilu2CKidUsejom/edit?usp=drive_link&ouid=108034611713022403834&rtpof=true&sd=true'
    },
    {
      title: 'weOwl',
      description: "A web application aims to facilitate and improve parents' communication with school staff, and makes it easier for parents to know the level of their children and everything related to their children and what may constitute fear for them regarding the future of their children and paves the way for them to communicate with their children's teachers online without much effort.",
      link: 'www.fb.com',
      logo: 'assets/images/project logos/weowl.png',
    },
    {
      title: 'Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
      link: 'www.fb.com'
    },
    {
      title: 'Card 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
      link: 'www.fb.com'
    },
    {
      title: 'Card 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
      link: 'www.fb.com'
    },
    {
      title: 'Card 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
      link: 'www.fb.com'
    },
    {
      title: 'Card 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
      link: 'www.fb.com'
    },
    {
      title: 'Card 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
      link: 'www.fb.com'
    }
  ];
  currentIndex = 0;

  moveSlide(direction: number) {
    const totalSlides = this.cards.length;
    this.currentIndex += direction;

    // Loop the slides
    if (this.currentIndex < 0) {
      this.currentIndex = totalSlides - 1;
    } else if (this.currentIndex >= totalSlides) {
      this.currentIndex = 0;
    }
  }
}