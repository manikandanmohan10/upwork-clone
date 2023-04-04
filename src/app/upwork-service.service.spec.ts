import { TestBed } from '@angular/core/testing';

import { UpworkServiceService } from './upwork-service.service';

describe('UpworkServiceService', () => {
  let service: UpworkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpworkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
