import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  constructor() { }

  content = "";

  @Output() contentChange: EventEmitter<string> = new EventEmitter();

  populate(str: string) {
    this.content = (!str || str != "null") ? str : "";
    this.contentChange.emit(this.content);
  }
}
