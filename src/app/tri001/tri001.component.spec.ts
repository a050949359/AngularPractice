import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tri001Component } from './tri001.component';

describe('Tri001Component', () => {
  let component: Tri001Component;
  let fixture: ComponentFixture<Tri001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tri001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tri001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
