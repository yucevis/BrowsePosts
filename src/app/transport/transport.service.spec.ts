import { TestBed } from '@angular/core/testing';

import { Transport } from './transport.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TransportService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: Transport = TestBed.get(Transport);
    expect(service).toBeTruthy();
  });
});
