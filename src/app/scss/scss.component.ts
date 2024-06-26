import { Component } from '@angular/core';
import { users } from '../data/data';

@Component({
  selector: 'app-scss',
  templateUrl: './scss.component.html',
  styleUrl: './scss.component.scss',
})
export class ScssComponent {
  users = users;
}
