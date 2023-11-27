import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointBuyService {

  constructor() { }

  private baseScore = 8;

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
