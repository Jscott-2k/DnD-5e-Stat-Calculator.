import { Component, OnInit } from '@angular/core';
import IAttributes from 'src/app/interfaces/IAttributes';
import { AttributeDataService } from 'src/app/services/ability-data.service';

@Component({
  selector: 'app-ability-racial-bonus',
  templateUrl: './ability-racial-bonus.component.html',
  styleUrls: ['./ability-racial-bonus.component.scss']
})
export class AbilityRacialBonusComponent implements OnInit{

  racialBonuses: IAttributes = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  };

  constructor(private abilityDataService: AttributeDataService) { }

  ngOnInit() {
    this.abilityDataService.updateRacialBonus(this.racialBonuses);
  }
  updateRacialBonus() {
    this.abilityDataService.updateRacialBonus(this.racialBonuses);
  }
}
