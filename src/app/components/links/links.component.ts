import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SubSink } from 'subsink/dist/subsink';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit, OnDestroy {
  subs = new SubSink();

  urls = null;

  copiedIndex: number | null = null;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    const json = this.localStorageService.getItem('urls');
    let data = [];
    if (json) {
      data = JSON.parse(json);
    }
    this.urls = data.reverse();

    this.subs.sink = this.localStorageService.watchStorage().subscribe(res => {
      const json = this.localStorageService.getItem('urls');
      let data = [];
      if (json) {
        data = JSON.parse(json);
      }
      this.urls = data.reverse();
    });
  }

  copyLink(index: number, links: string) {
    this.copiedIndex = index;
    navigator.clipboard.writeText(links);
  }
}
