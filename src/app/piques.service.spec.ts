import { TestBed } from '@angular/core/testing';

import { PiquesService } from './piques.service';

describe('PiquesService', () => {
  let service: PiquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
