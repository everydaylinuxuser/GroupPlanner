import { TestBed } from '@angular/core/testing';

import { Communitygroup } from './communitygroup.service';

describe('Communitygroup', () => {
  let service: Communitygroup;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Communitygroup);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
