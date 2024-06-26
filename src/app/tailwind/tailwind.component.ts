import { Component } from '@angular/core';
import { users } from '../data/data';

@Component({
  selector: 'app-tailwind',
  templateUrl: './tailwind.component.html',
  styleUrl: './tailwind.component.scss',
})
export class TailwindComponent {
  users = users;
}
