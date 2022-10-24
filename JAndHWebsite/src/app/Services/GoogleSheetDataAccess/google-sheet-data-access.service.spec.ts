import { TestBed } from '@angular/core/testing';

import { GoogleSheetDataAccessService } from './google-sheet-data-access.service';

describe('GoogleSheetDataAccessService', () => {
  let service: GoogleSheetDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSheetDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
