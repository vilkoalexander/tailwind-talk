import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeSwitchComponent } from './dark-mode-switch/dark-mode-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DarkModeSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tailwind-talk';
}
