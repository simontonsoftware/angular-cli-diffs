import { TestBed } from '@angular/core/testing';

import { TheLibraryService } from './the-library.service';

describe('TheLibraryService', () => {
  let service: TheLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
