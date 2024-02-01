import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityTotalScoreComponent } from './ability-total-score.component';

describe('AbilityTotalScoreComponent', () => {
  let component: AbilityTotalScoreComponent;
  let fixture: ComponentFixture<AbilityTotalScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityTotalScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityTotalScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
