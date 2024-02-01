import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreModifierService {
  constructor(){}
  calculateModifier(abilityScore: number): number {
    return Math.floor ((abilityScore - 10) / 2)
  }
}
