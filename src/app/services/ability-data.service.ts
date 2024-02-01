import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import IAttributes from '../interfaces/IAttributes';

@Injectable({
  providedIn: 'root'
})
export class AttributeDataService {
  private abilityScoresSubject: BehaviorSubject<IAttributes> = new BehaviorSubject({
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8
  });

  private racialBonusesSubject: BehaviorSubject<IAttributes> = new BehaviorSubject({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  });

  private totalScoresSubject: BehaviorSubject<IAttributes> = new BehaviorSubject({
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8
  });

  abilityScores$: Observable<IAttributes> = this.abilityScoresSubject.asObservable();
  racialBonuses$: Observable<IAttributes> = this.racialBonusesSubject.asObservable();
  totalScores$: Observable<IAttributes> = this.totalScoresSubject.asObservable();
  
  updateAbilityScores(newScores: IAttributes) {
    this.abilityScoresSubject.next(newScores);
    this.updateTotalScore(newScores, this.racialBonusesSubject.value);
  }
  updateRacialBonus(newBonuses: IAttributes) {
    this.racialBonusesSubject.next(newBonuses);
    this.updateTotalScore(this.abilityScoresSubject.value, newBonuses);
  }
  private updateTotalScore(newScores: IAttributes, newBonuses: IAttributes) {
    let totalScores:IAttributes = {
      strength: newScores.strength + newBonuses.strength,
      dexterity: newScores.dexterity + newBonuses.dexterity,
      constitution: newScores.constitution + newBonuses.constitution,
      intelligence: newScores.intelligence + newBonuses.intelligence,
      wisdom: newScores.wisdom + newBonuses.wisdom,
      charisma: newScores.charisma + newBonuses.charisma,
    }
    this.totalScoresSubject.next(totalScores);
  }
}