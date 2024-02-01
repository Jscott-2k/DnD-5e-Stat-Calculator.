import { Component } from '@angular/core';
import IAttributes from 'src/app/interfaces/IAttributes';
import { AttributeDataService } from 'src/app/services/ability-data.service';

@Component({
  selector: 'app-ability-total-score',
  templateUrl: './ability-total-score.component.html',
  styleUrls: ['./ability-total-score.component.scss']
})
export class AbilityTotalScoreComponent {

  totalScores:IAttributes = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  }

  constructor(private abilityData: AttributeDataService) {}

  ngOnInit() {
    this.abilityData.totalScores$.subscribe((totalScores) => {
      this.totalScores = totalScores;
    });
  }
  
}
