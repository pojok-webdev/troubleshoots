import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleshootChecklistsPage } from './troubleshoot-checklists.page';

describe('TroubleshootChecklistsPage', () => {
  let component: TroubleshootChecklistsPage;
  let fixture: ComponentFixture<TroubleshootChecklistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleshootChecklistsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleshootChecklistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
