import { TestBed } from '@angular/core/testing';

import { AppvarService } from './appvar.service';

describe('AppvarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppvarService = TestBed.get(AppvarService);
    expect(service).toBeTruthy();
  });
});
