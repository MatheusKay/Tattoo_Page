import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  slides = [
    {
      img: '../../../assets/images/image_tatuador/Tatuador_1.jpg',
      name: 'Mari',
      work: 'Tatuador',
      linkSocial: {
        instagram: '#',
        whatsapp:'#'
      }
    },
    {
      img: '../../../assets/images/image_tatuador/Tatuador_2.jpg',
      name: 'Nila Santos',
      work: 'Artista',
      linkSocial: {
        instagram: '#',
        whatsapp:'#'
      }
    },
    {
      img: '../../../assets/images/image_tatuador/Tatuador_3.jpg',
      name: 'Nelson',
      work: 'Tatuadora',
      linkSocial: {
        instagram: '#',
        whatsapp:'#'
      }
    },
    {
      img: '../../../assets/images/image_tatuador/Tatuador_1.jpg',
      name: 'Carla Diaz',
      work: 'Tatuador',
      linkSocial: {
        instagram: '#',
        whatsapp:'#'
      }
    }
  ]

  slideConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          variableWidth: false
        }
      }
    ]
  }
}
