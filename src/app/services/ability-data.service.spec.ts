import { TestBed } from '@angular/core/testing';

import { AbilityDataService } from './ability-data.service';

describe('AbilityDataService', () => {
  let service: AbilityDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbilityDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
