import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PibbleService {
  private images: Record<string,string> = {
    'og-pibb': '../assets/pibbles/og-pibble.jpg',
    'washington': '../assets/pibbles/washington.jpg',
    'gmail': '../assets/pibbles/gmail.jpg',
    'pb-cup': '../assets/pibbles/pb-cup.jpg',
    'geebles': '../assets/pibbles/geebles.jpg',
  }

  // Example: fetch an image URL from a public API or your own backend
  getPibbleImage(type: string): Observable<string> {
    const url = this.images[type];
    return of(url);
  }
}
