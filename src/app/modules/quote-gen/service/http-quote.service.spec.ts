import { TestBed } from '@angular/core/testing';

import { HttpQuoteService } from './http-quote.service';

describe('HttpQuoteService', () => {
  let service: HttpQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
