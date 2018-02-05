import { TestBed, inject } from '@angular/core/testing';

import { StoreActionService } from './store-action.service';

describe('StoreActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreActionService]
    });
  });

  it('should be created', inject([StoreActionService], (service: StoreActionService) => {
    expect(service).toBeTruthy();
  }));
});
