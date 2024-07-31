import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  isSection = 1
  isMobile = false

  handleSection(s: number) {
    this.isSection = s
  }

  handleMobileToggle() {
    this.isMobile = !this.isMobile
  }

  scrollToSection(e: MouseEvent, s: number): void {
    e.preventDefault()
    this.handleSection(s)
    this.handleMobileToggle()

    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1)
    if(!targetId) return

    const targetElement = document.getElementById(targetId)

    if(targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }

  }
}
