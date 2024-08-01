import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';

import { FunctionScrollService } from '../../services/FunctionScroll/function-scroll.service'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  constructor(private functionScrollService: FunctionScrollService) {}

  ngOnInit(): void {

  }

  isSection = 1
  isMobile = false

  handleSection(s: number) {
    this.isSection = s
  }

  handleMobileToggle() {
    this.isMobile = !this.isMobile
  }

  scrollSection(e: MouseEvent, s: number): void {
    this.handleSection(s)
    this.handleMobileToggle()
    this.functionScrollService.scrollToSection(e, s)
  }
}
