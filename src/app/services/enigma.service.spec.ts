import { TestBed, inject } from '@angular/core/testing';

import { EnigmaService } from './enigma.service';

describe('EnigmaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnigmaService]
    });
  });

  it('should be created', inject([EnigmaService], (service: EnigmaService) => {
    expect(service).toBeTruthy();
  }));
});
