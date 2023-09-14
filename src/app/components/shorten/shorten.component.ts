import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkShortenerService } from 'src/app/services/link-shortener.service.';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SubSink } from 'subsink';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-shorten',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss']
})
export class ShortenComponent implements OnDestroy {
  subs = new SubSink();

  urlFormGroup = new FormGroup({
    url: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  constructor(
    private linkShortenerService: LinkShortenerService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  shorten() {
    this.urlFormGroup.markAsPristine();
    this.subs.sink = this.linkShortenerService.shorten(this.urlFormGroup.controls.url.value).subscribe(res => {
      const json = this.localStorageService.getItem('urls');
      let data = [];
      if (json) {
        data = JSON.parse(json);
      }
      data.push(res);
      this.localStorageService.setItem('urls', JSON.stringify(data));
    });
  }
}
