import { Component, Input, OnInit } from '@angular/core';
import { PointBuyService } from 'src/app/services/point-buy.service';
import { AttributeDataService } from 'src/app/services/ability-data.service';
import IAttributes from 'src/app/interfaces/IAttributes';
import { ATTRIBUTE_KEYS } from 'src/app/constants/attributesl.constants';

@Component({
  selector: 'app-ability-costs',
  templateUrl: './ability-costs.component.html',
  styleUrls: ['./ability-costs.component.scss']
})
export class AbilityCostsComponent implements OnInit {

  totalCost:number = 0;


  costs:IAttributes = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  }

  constructor(private abilityData: AttributeDataService, private pointBuy: PointBuyService) {}

  ngOnInit() {
    this.abilityData.abilityScores$.subscribe((abilityScores) => {
      this.totalCost = 0;
      ATTRIBUTE_KEYS.forEach(attr => {
        this.costs[attr] = this.calculateCost(abilityScores[attr]);
        this.totalCost+=this.costs[attr];
      });
      this.pointBuy.updateTotalCost(this.totalCost);
    });
  }

  calculateCost(abilityScore: number): number {
    return this.pointBuy.calculatePointCost(abilityScore);

  }
}