import { Injectable } from '@angular/core';
import {BuyEntry } from '../buy-entry';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BuyEntryService {
  private buyEntriesUrl = 'http://localhost:8080/buy-entries/all';
  private saveBuyEntryUrl = 'http://localhost:8080/buy-entries/add';
  constructor(private http: HttpClient) { }

  getBuyEntries(): Observable<BuyEntry[]> {
    return this.http.get<BuyEntry[]>(this.buyEntriesUrl);
  }

  saveBuyEntries(buyEntryData): Observable<any> {
    return this.http.post<any>(this.saveBuyEntryUrl, buyEntryData);
  }
}
