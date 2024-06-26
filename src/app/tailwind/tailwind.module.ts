import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TailwindRoutingModule } from './tailwind-routing.module';
import { TailwindComponent } from './tailwind.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [TailwindComponent, UserCardComponent],
  imports: [CommonModule, TailwindRoutingModule],
})
export class TailwindModule {}
