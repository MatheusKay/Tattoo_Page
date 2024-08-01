import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-faq.component.html',
  styleUrl: './card-faq.component.scss'
})
export class CardFaqComponent {
  isToggled = false

  @Input() quest!: {
    quest: string;
    response: string;
  };

  toggle() {
    this.isToggled = !this.isToggled

    console.log(this.isToggled)
  }
}
