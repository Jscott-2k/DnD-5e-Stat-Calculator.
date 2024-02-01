import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityRacialBonusComponent } from './ability-racial-bonus.component';

describe('AbilityRacialBonusComponent', () => {
  let component: AbilityRacialBonusComponent;
  let fixture: ComponentFixture<AbilityRacialBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityRacialBonusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityRacialBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
