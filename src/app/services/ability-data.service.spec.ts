import { TestBed } from '@angular/core/testing';

import { AttributeDataService } from './ability-data.service';

describe('AbilityDataService', () => {
  let service: AttributeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
