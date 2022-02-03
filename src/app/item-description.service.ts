import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDescriptionService {

  constructor() { }

  description: string[] = [];

  add(message: string) {
    this.description.push(message);
  }

  clear() {
    this.description = [];
  }
}
