import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbilityScoresComponent } from './components/ability-scores/ability-scores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbilityCostsComponent } from './components/ability-costs/ability-costs.component';

@NgModule({
  declarations: [
    AppComponent,
    AbilityScoresComponent,
    AbilityCostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
