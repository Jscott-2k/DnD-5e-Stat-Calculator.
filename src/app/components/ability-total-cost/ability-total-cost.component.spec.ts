import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityTotalCostComponent } from './ability-total-cost.component';

describe('AbilityTotalCostComponent', () => {
  let component: AbilityTotalCostComponent;
  let fixture: ComponentFixture<AbilityTotalCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityTotalCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityTotalCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
