/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SBookComponent } from './sBook.component';

describe('SBookComponent', () => {
  let component: SBookComponent;
  let fixture: ComponentFixture<SBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
