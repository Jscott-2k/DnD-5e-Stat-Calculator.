import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import IAttributes from 'src/app/interfaces/IAttributes';
import { AttributeDataService } from 'src/app/services/ability-data.service';
import { PointBuyService } from 'src/app/services/point-buy.service';



@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.scss']
})
export class AbilityScoresComponent implements OnInit {
  abilityScores: IAttributes = {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8
  };

  constructor(private abilityDataService: AttributeDataService) {}

  ngOnInit() {
    this.abilityDataService.updateAbilityScores(this.abilityScores);
  }
  updateAbilityScore() {
    this.abilityDataService.updateAbilityScores(this.abilityScores);
  }
}