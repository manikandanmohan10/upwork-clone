import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpworkServiceService {
  toggleValue: any = false;
  private toggleSubject = new Subject<any>();
  constructor() { }

  toggleOption(newValue: any): void{
    this.toggleValue = newValue;
    this.toggleSubject.next(newValue)
  }

  getToggleValue(): Observable<any>{
    return this.toggleSubject.asObservable();
  }
}
