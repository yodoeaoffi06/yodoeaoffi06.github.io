import { TestBed } from '@angular/core/testing';

import { CertificationsService } from './certifications.service';

describe('CertificationsService', () => {
  let service: CertificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificationsService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
