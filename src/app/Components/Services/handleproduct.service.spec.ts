import { TestBed } from '@angular/core/testing';

import { HandleproductService } from './handleproduct.service';

describe('HandleproductService', () => {
  let service: HandleproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
