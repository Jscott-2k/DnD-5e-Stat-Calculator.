import { Component, OnInit } from '@angular/core';
import { ATTRIBUTE_KEYS } from 'src/app/constants/attributesl.constants';
import IAttributes from 'src/app/interfaces/IAttributes';
import { AttributeDataService } from 'src/app/services/ability-data.service';
import { ScoreModifierService } from 'src/app/services/score-modifier.service';

@Component({
  selector: 'app-ability-modifier',
  templateUrl: './ability-modifier.component.html',
  styleUrls: ['./ability-modifier.component.scss']
})
export class AbilityModifierComponent implements OnInit{
  modifiers:IAttributes = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  }
  constructor(private abilityData: AttributeDataService, private scoreModifier: ScoreModifierService) {}

  ngOnInit() {
    this.abilityData.totalScores$.subscribe((abilityScores) => {
      ATTRIBUTE_KEYS.forEach(attr => {
        this.modifiers[attr] = this.calculateModifier(abilityScores[attr]);
      });
    });
  }

  calculateModifier(abilityScore: number): number {
    return this.scoreModifier.calculateModifier(abilityScore);
  }
}
