import { TestBed, inject } from '@angular/core/testing';

import { AngularAnalyticsService } from './angular-analytics.service';

describe('AngularAnalyticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularAnalyticsService]
    });
  });

  it('should be created', inject([AngularAnalyticsService], (service: AngularAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
