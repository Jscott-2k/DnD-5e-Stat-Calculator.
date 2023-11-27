import { Component, Input, OnInit } from '@angular/core';
import { PointBuyService } from 'src/app/services/point-buy.service';
import { AbilityScoresComponent } from '../ability-scores/ability-scores.component';
import { AbilityDataService } from 'src/app/services/ability-data.service';

@Component({
  selector: 'app-ability-costs',
  templateUrl: './ability-costs.component.html',
  styleUrls: ['./ability-costs.component.scss']
})
export class AbilityCostsComponent implements OnInit {

  strengthCost: number = 0;
  dexterityCost: number = 0;
  constitutionCost: number = 0;
  intelligenceCost: number = 0;
  wisdomCost: number = 0;
  charismaCost: number = 0;
  
  totalCost:number = 0;

  constructor(private abilityData: AbilityDataService, private pointBuy: PointBuyService) {}

  ngOnInit() {
    this.abilityData.abilityScores$.subscribe((abilityScores) => {
      this.strengthCost = this.calculateCost(abilityScores.strength);
      this.dexterityCost = this.calculateCost(abilityScores.dexterity);
      this.constitutionCost = this.calculateCost(abilityScores.constitution);
      this.intelligenceCost = this.calculateCost(abilityScores.intelligence);
      this.wisdomCost = this.calculateCost(abilityScores.wisdom);
      this.charismaCost = this.calculateCost(abilityScores.charisma);

      this.totalCost = this.strengthCost + this.dexterityCost + this.constitutionCost +
      this.intelligenceCost + this.wisdomCost + this.charismaCost;
    });
  }

  calculateCost(abilityScore: number): number {
    return this.pointBuy.calculatePointCost(abilityScore);
  }
}