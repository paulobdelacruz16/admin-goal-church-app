import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  isLoading = new BehaviorSubject<boolean>(false);

  start() {
    this.isLoading.next(true);
  }

  stop() {
    this.isLoading.next(false);
  }
}
