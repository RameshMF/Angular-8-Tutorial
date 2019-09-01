import { TestBed } from '@angular/core/testing';

import { HelloWorldService } from './hello-world.service';

describe('HelloWorldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloWorldService = TestBed.get(HelloWorldService);
    expect(service).toBeTruthy();
  });
});
