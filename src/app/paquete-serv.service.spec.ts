import { TestBed } from '@angular/core/testing';

import { PaqueteServService } from './paquete-serv.service';

describe('PaqueteServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaqueteServService = TestBed.get(PaqueteServService);
    expect(service).toBeTruthy();
  });
});
