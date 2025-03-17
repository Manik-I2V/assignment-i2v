import { Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  current_page : WritableSignal<String>= signal('Dashboard');

  setCurrentPage(page: string) {
    this.current_page.set(page);
  }

  constructor() { }
}
