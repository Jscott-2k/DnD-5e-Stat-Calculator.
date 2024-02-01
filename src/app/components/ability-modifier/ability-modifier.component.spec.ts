import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityModifierComponent } from './ability-modifier.component';

describe('AbilityModifierComponent', () => {
  let component: AbilityModifierComponent;
  let fixture: ComponentFixture<AbilityModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityModifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
