import { Component, OnInit } from '@angular/core';
import { FunctionScrollService } from '../../services/FunctionScroll/function-scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private functionScrollService: FunctionScrollService) {}

  ngOnInit(): void {}

  scrollSection(e: MouseEvent, s: number): void {
    this.functionScrollService.scrollToSection(e, s)
  }
}
