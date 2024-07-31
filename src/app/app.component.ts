import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { EquipeSectionComponent } from './pages/equipe-section/equipe-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    EquipeSectionComponent,
    FooterComponent,
    ContatoComponent,
    FaqComponent,
    GaleriaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'tattoo_studio';
}
