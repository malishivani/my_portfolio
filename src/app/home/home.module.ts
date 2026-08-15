import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HeroComponent } from '../component/hero/hero.component';
import { ExpiranceComponent } from '../component/expirance/expirance.component';
import { AboutComponent } from '../component/about/about.component';
import { SkillComponent } from '../component/skill/skill.component';
import { NavbarComponent } from '../component/navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ExpiranceComponent,
    AboutComponent,
    SkillComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
