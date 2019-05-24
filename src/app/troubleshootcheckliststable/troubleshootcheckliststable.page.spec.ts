import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleshootcheckliststablePage } from './troubleshootcheckliststable.page';

describe('TroubleshootcheckliststablePage', () => {
  let component: TroubleshootcheckliststablePage;
  let fixture: ComponentFixture<TroubleshootcheckliststablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleshootcheckliststablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleshootcheckliststablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
