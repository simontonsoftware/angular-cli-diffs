import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLibrary } from './the-library';

describe('TheLibrary', () => {
  let component: TheLibrary;
  let fixture: ComponentFixture<TheLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheLibrary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheLibrary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
