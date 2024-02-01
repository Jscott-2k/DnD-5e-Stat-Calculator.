import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbilityScoresComponent } from './components/ability-scores/ability-scores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbilityCostsComponent } from './components/ability-costs/ability-costs.component';
import { AbilityNamesComponent } from './components/ability-names/ability-names.component';
import { AbilityRacialBonusComponent } from './components/ability-racial-bonus/ability-racial-bonus.component';
import { AbilityModifierComponent } from './components/ability-modifier/ability-modifier.component';
import { AbilityTotalScoreComponent } from './components/ability-total-score/ability-total-score.component';
import { AbilityTotalCostComponent } from './components/ability-total-cost/ability-total-cost.component';

@NgModule({
  declarations: [
    AppComponent,
    AbilityScoresComponent,
    AbilityCostsComponent,
    AbilityNamesComponent,
    AbilityRacialBonusComponent,
    AbilityModifierComponent,
    AbilityTotalScoreComponent,
    AbilityTotalCostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
