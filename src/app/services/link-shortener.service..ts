/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkShortenerService {
  baseUrl = 'https://api.shrtco.de/v2/';

  constructor(private http: HttpClient) {}

  shorten(url: string) {
    return this.http.get(`${this.baseUrl}shorten`, { params: { url: url } });
  }
}
