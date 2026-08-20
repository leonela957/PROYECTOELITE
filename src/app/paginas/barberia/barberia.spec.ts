import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barberia } from './barberia';

describe('Barberia', () => {
  let component: Barberia;
  let fixture: ComponentFixture<Barberia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Barberia],
    }).compileComponents();

    fixture = TestBed.createComponent(Barberia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
