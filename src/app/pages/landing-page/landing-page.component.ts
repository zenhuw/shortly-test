import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { ShortenComponent } from 'src/app/components/shorten/shorten.component';

@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, ShortenComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {}