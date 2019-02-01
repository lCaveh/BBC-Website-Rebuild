import { TestBed, inject } from '@angular/core/testing';

import { MainnewsService } from './mainnews.service';

describe('MainnewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainnewsService]
    });
  });

  it('should be created', inject([MainnewsService], (service: MainnewsService) => {
    expect(service).toBeTruthy();
  }));
});
