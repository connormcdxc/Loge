import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LogService {
  items: Song[] = [];

  addToLog(song: Song) {
    this.items.push(song);
  }

  getLog() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
