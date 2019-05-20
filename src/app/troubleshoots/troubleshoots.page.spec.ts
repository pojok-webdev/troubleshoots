import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleshootsPage } from './troubleshoots.page';

describe('TroubleshootsPage', () => {
  let component: TroubleshootsPage;
  let fixture: ComponentFixture<TroubleshootsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleshootsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleshootsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
