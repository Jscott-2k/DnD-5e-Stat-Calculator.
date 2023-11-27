import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AbilityDataService } from 'src/app/services/ability-data.service';
import { PointBuyService } from 'src/app/services/point-buy.service';

interface AbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.scss']
})
export class AbilityScoresComponent {
  abilityScores: AbilityScores = {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8
  };

  constructor(private abilityDataService: AbilityDataService) {}

  ngOnInit() {
    this.abilityDataService.updateAbilityScores(this.abilityScores);
  }

  updateAbilityScore(scoreName: keyof AbilityScores) {
    this.abilityDataService.updateAbilityScores( this.abilityScores);
  }
}