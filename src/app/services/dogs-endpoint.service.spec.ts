import { TestBed } from '@angular/core/testing';

import { DogsEndpointService } from './dogs-endpoint.service';

describe('DogsEndpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogsEndpointService = TestBed.get(DogsEndpointService);
    expect(service).toBeTruthy();
  });
});
