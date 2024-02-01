import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PointBuyService {


  constructor() { }
  
  private totalCostSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  totalCost$: Observable<number> = this.totalCostSubject.asObservable();
  updateTotalCost(totalCost: number) {
    this.totalCostSubject.next(totalCost);
  }
  calculatePointCost(abilityScore: number): number {
    if (abilityScore <= 13) {
      return Math.floor((abilityScore - 8) / 2);
    } else if (abilityScore === 14) {
      return 7;
    } else if (abilityScore === 15) {
      return 9;
    }
    return 0; // Handle any other cases if necessary
  }

}
