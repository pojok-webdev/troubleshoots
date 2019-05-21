import { TestBed } from '@angular/core/testing';

import { TroubleshootService } from './troubleshoot.service';

describe('TroubleshootService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TroubleshootService = TestBed.get(TroubleshootService);
    expect(service).toBeTruthy();
  });
});
