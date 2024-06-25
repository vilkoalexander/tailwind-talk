import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScssRoutingModule } from './scss-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ScssComponent } from './scss.component';

@NgModule({
  declarations: [ScssComponent, UserCardComponent],
  imports: [CommonModule, ScssRoutingModule],
})
export class ScssModule {}
