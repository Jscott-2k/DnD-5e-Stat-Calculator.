import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbilityDataService {
  private abilityScoresSubject: BehaviorSubject<{
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }> = new BehaviorSubject({
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8
  });

  abilityScores$: Observable<{
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }> = this.abilityScoresSubject.asObservable();

  updateAbilityScores(newScores: any) {
    this.abilityScoresSubject.next(newScores);
  }
}