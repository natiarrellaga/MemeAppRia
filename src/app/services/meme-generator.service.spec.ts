import { TestBed } from '@angular/core/testing';

import { MemeGeneratorService } from './meme-generator.service';

describe('MemeGeneratorService', () => {
  let service: MemeGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemeGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
