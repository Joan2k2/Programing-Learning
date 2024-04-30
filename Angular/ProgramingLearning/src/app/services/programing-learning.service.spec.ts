import { TestBed } from '@angular/core/testing';

import { ProgramingLearningService } from './programing-learning.service';

describe('ProgramingLearningService', () => {
  let service: ProgramingLearningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramingLearningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
