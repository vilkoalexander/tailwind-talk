import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-switch',
  standalone: true,
  imports: [],
  template: `
    <button (click)="toggleDarkMode()" class="dlh-text-primary">
      {{ isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeSwitchComponent {
  isDarkMode = false;

  constructor() {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateTheme();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateTheme();
  }

  updateTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
