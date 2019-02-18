import { TestBed } from '@angular/core/testing';

import { NadiabotService } from './nadiabot.service';

describe('NadiabotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NadiabotService = TestBed.get(NadiabotService);
    expect(service).toBeTruthy();
  });
});
