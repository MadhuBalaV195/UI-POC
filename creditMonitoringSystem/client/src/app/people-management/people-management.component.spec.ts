/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeopleManagement } from './people-management.component';

describe('PeopleManagement', () => {
  let component: PeopleManagement;
  let fixture: ComponentFixture<PeopleManagement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleManagement ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
