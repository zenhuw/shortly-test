import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  dialogOpen = false;

  @ViewChild('appDialog', { static: true }) dialog!: ElementRef<HTMLElement>;

  dialogSwitch() {
    this.dialogOpen = !this.dialogOpen;
    if (this.dialogOpen) {
      this.dialog.nativeElement.hidden = false;
    } else {
      this.dialog.nativeElement.hidden = true;
    }
  }
}
