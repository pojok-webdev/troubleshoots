import { TestBed } from '@angular/core/testing';

import { TroubleshootcausesService } from './troubleshootcauses.service';

describe('TroubleshootcausesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TroubleshootcausesService = TestBed.get(TroubleshootcausesService);
    expect(service).toBeTruthy();
  });
});
