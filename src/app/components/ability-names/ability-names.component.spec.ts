import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityNamesComponent } from './ability-names.component';

describe('AbilityNamesComponent', () => {
  let component: AbilityNamesComponent;
  let fixture: ComponentFixture<AbilityNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
