import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { HeroComponent } from '../component/hero/hero.component';
import { ExpiranceComponent } from '../component/expirance/expirance.component';
import { AboutComponent } from '../component/about/about.component';
import { SkillComponent } from '../component/skill/skill.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ExpiranceComponent,
    AboutComponent,
    SkillComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
