/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageSub = new Subject<string>();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub.next('added');
  }
}
