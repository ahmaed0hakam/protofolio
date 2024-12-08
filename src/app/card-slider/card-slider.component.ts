import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ICard } from './card.interface';


@Component({
  selector: 'card-slider',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.sass'
})
export class CardSliderComponent {

  logosPrefix = "assets/images/project logos/"
  cards: ICard[] = [
    {
      title: 'Shakey',
      description: "AI-powered seismic detection and 3D visualization. <br>I led the front-end development and design, building a 3D platform to visualize seismic activity on the Moon and Mars. Integrated the AI-detected data, displaying quakes' locations and details in an interactive way. Cleaned and prepped the dataset for future ML applications.",
      link: 'https://github.com/ahmaed0hakam/shakey',
      logo: 'shakey.png',
      demo: "https://ahmaed0hakam.github.io/shakey"
    },
    {
      title: 'masArI',
      description: 'Specialized web application designed to assist career shifters and returnees in creating personalized learning paths. Using GenAI, our platform curates courses, lessons, and learning paths tailored to individual needs. Additionally, masArI features a cutting-edge learning assistant (chat bot) for interactive guidance.',
      link: 'https://github.com/ahmaed0hakam/Masari',
      figma: 'https://www.figma.com/design/vLhXrcgmwlb0yc5HKiPIdn/Masari-WebApp?node-id=1-6&t=PBWWy7jNjdYurQTj-0',
      logo: 'masari.png',
      slides: 'https://docs.google.com/presentation/d/1YTGZZcoZN6ehW-t8URilu2CKidUsejom/edit?usp=drive_link&ouid=108034611713022403834&rtpof=true&sd=true'
    },
    {
      title: 'Qissah',
      description: 'Developed an AI-powered platform that personalizes storytelling for children, enhancing creativity and engagement. Addressed the need for unique, engaging stories tailored to each child\'s interests and imagination.',
      link: 'https://github.com/ahmaed0hakam/QISSAH',
      logo: 'qissah.png',
      slides: 'https://www.canva.com/design/DAF5z-jCM-c/QDunrrno1D8tCrpfHYEgkA/edit'
    },
    {
      title: 'weOwl',
      description: "A web application aims to facilitate and improve parents' communication with school staff, and makes it easier for parents to know the level of their children and everything related to their children and what may constitute fear for them regarding the future of their children and paves the way for them to communicate with their children's teachers online without much effort.",
      link: 'https://github.com/ahmaed0hakam/WeOwl',
      logo: 'weowl.png',
    },
    {
      title: 'Covid 19 Data Science Project',
      description: 'The dataset holds information about the cases and deaths from COVID-19 for multiple countries. We explored and studied the dataset and extracted as much useful information as we could, analyzed this information and visualized it in proper figures. We prepared this dataset by cleaning and handling missing values in it, applied some operations to get it ready for any possible ML application.',
      link: 'https://github.com/ahmaed0hakam/Covid19-data-science-project',
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