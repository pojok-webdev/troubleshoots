import { TestBed } from '@angular/core/testing';

import { TroubleshootChecklistsService } from './troubleshoot-checklists.service';

describe('TroubleshootChecklistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TroubleshootChecklistsService = TestBed.get(TroubleshootChecklistsService);
    expect(service).toBeTruthy();
  });
});
