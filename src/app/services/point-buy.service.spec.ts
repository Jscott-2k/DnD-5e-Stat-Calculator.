import { TestBed } from '@angular/core/testing';

import { PointBuyService } from './point-buy.service';

describe('PointBuyService', () => {
  let service: PointBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointBuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
