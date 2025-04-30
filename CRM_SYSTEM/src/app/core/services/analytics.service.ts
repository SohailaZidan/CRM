import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private visits$ = new BehaviorSubject<number | null>(null);
  private cacheDuration = 2 * 60 * 1000; 
  private cacheKey = 'live-visits-cache';

  constructor() {
    this.loadFromCache();
    this.startWebSocketMock();
  }

  private loadFromCache() {
    const cache = localStorage.getItem(this.cacheKey);
    if (cache) {
      const { value, timestamp } = JSON.parse(cache);
      if (new Date().getTime() - timestamp < this.cacheDuration) {
        this.visits$.next(value);
      }
    }
  }

  private startWebSocketMock() {
    interval(1000).pipe(
      map(() => Math.floor(Math.random() * 1500)) 
    ).subscribe(visitCount => {
      this.visits$.next(visitCount);
      localStorage.setItem(this.cacheKey, JSON.stringify({
        value: visitCount,
        timestamp: new Date().getTime()
      }));
    });
  }

  getLiveVisits() {
    return this.visits$.asObservable();
  }
}
