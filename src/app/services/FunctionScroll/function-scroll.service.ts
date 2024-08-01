import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionScrollService {

  constructor() { }

  public scrollToSection(e: MouseEvent, s: number): void {
    e.preventDefault()

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
