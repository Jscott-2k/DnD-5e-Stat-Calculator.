import { TestBed } from '@angular/core/testing';

import { ScoreModifierService } from './score-modifier.service';

describe('ScoreModifierService', () => {
  let service: ScoreModifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreModifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
