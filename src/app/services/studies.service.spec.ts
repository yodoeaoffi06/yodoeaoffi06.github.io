import { TestBed } from '@angular/core/testing';

import { StudiesService } from './studies.service';

describe('StudiesService', () => {
  let service: StudiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudiesService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
