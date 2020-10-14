import { TestBed } from '@angular/core/testing';

import { TestapisService } from './testapis.service';

describe('TestapisService', () => {
  let service: TestapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
