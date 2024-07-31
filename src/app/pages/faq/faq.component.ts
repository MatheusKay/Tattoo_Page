import { Component } from '@angular/core';
import { CardFaqComponent } from '../../components/card-faq/card-faq.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CardFaqComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
