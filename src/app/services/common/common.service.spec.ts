import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get de number of shared episodes', () => {
    let response = service.getAmountOfSharedEpisodes(mockDataA, mockDataB);
    expect(response).toEqual(6);
  });
});

const mockDataA = [5, 6, 9, 89, 56, 12, 35];
const mockDataB = [5, 8, 9, 98, 56, 12, 6, 35];
