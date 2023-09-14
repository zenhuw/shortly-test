import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { ShortenComponent } from 'src/app/components/shorten/shorten.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { LinksComponent } from 'src/app/components/links/links.component';

@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, ShortenComponent, FooterComponent, LinksComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {}
