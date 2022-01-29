import { TestBed } from '@angular/core/testing';

import { MatGastService } from './mat-gast.service';

describe('MatGastService', () => {
  let service: MatGastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatGastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
