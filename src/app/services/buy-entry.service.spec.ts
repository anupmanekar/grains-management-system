import { TestBed, inject } from '@angular/core/testing';

import { BuyEntryService } from './buy-entry.service';

describe('BuyEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyEntryService]
    });
  });

  it('should be created', inject([BuyEntryService], (service: BuyEntryService) => {
    expect(service).toBeTruthy();
  }));
});
