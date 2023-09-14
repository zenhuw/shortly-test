/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shortener } from '../models/shortener';

@Injectable({
  providedIn: 'root'
})
export class LinkShortenerService {
  baseUrl = 'https://api.shrtco.de/v2/';

  constructor(private http: HttpClient) {}

  shorten(url: string): Observable<Shortener> {
    return this.http.get<Shortener>(`${this.baseUrl}shorten`, { params: { url: url } });
  }
}
