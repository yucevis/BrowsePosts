import { TestBed } from '@angular/core/testing';

import { Transport } from './transport.service';

describe('TransportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Transport = TestBed.get(Transport);
    expect(service).toBeTruthy();
  });
});
