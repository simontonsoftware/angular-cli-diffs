import { TestBed } from '@angular/core/testing';

import { TheLibraryService } from './the-library.service';

describe('TheLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheLibraryService = TestBed.get(TheLibraryService);
    expect(service).toBeTruthy();
  });
});
