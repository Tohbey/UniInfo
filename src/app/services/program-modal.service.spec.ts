import { TestBed } from '@angular/core/testing';

import { ProgramModalService } from './program-modal.service';

describe('ProgramModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramModalService = TestBed.get(ProgramModalService);
    expect(service).toBeTruthy();
  });
});
