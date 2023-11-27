import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityCostsComponent } from './ability-costs.component';

describe('AbilityCostsComponent', () => {
  let component: AbilityCostsComponent;
  let fixture: ComponentFixture<AbilityCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityCostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
