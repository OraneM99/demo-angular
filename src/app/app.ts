import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroBody } from './hero-body/hero-body';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    HeroBody, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-angular');
}
