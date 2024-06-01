import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLibraryComponent } from './the-library.component';

describe('TheLibraryComponent', () => {
  let component: TheLibraryComponent;
  let fixture: ComponentFixture<TheLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
