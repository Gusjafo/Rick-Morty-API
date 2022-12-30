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

  it('getAmountOfSharedEpisodes() should get de number of shared episodes', () => {
    let response = service.getAmountOfSharedEpisodes(mockDataA, mockDataB);
    expect(response).toEqual(6);
  });

  it('getEpisodes() should get de number of episodes', () => {
    let response = service.getEpisodes(mockEpisodes);
    expect(response).toEqual(mockEpisodesTotal);
  });
});

const mockDataA = [5, 6, 9, 89, 56, 12, 35];
const mockDataB = [5, 8, 9, 98, 56, 12, 6, 35];

const mockEpisodes = [
  'https://rickandmortyapi.com/api/episode/6',
  'https://rickandmortyapi.com/api/episode/7',
  'https://rickandmortyapi.com/api/episode/8',
  'https://rickandmortyapi.com/api/episode/9',
  'https://rickandmortyapi.com/api/episode/10',
  'https://rickandmortyapi.com/api/episode/11',
  'https://rickandmortyapi.com/api/episode/12',
  'https://rickandmortyapi.com/api/episode/13',
  'https://rickandmortyapi.com/api/episode/14',
  'https://rickandmortyapi.com/api/episode/15',
  'https://rickandmortyapi.com/api/episode/16',
  'https://rickandmortyapi.com/api/episode/18',
  'https://rickandmortyapi.com/api/episode/19',
  'https://rickandmortyapi.com/api/episode/20',
  'https://rickandmortyapi.com/api/episode/21',
  'https://rickandmortyapi.com/api/episode/22',
  'https://rickandmortyapi.com/api/episode/23',
  'https://rickandmortyapi.com/api/episode/26',
  'https://rickandmortyapi.com/api/episode/29',
  'https://rickandmortyapi.com/api/episode/30',
  'https://rickandmortyapi.com/api/episode/31',
  'https://rickandmortyapi.com/api/episode/32',
  'https://rickandmortyapi.com/api/episode/33',
  'https://rickandmortyapi.com/api/episode/35',
  'https://rickandmortyapi.com/api/episode/36',
  'https://rickandmortyapi.com/api/episode/38',
  'https://rickandmortyapi.com/api/episode/39',
  'https://rickandmortyapi.com/api/episode/40',
  'https://rickandmortyapi.com/api/episode/41',
  'https://rickandmortyapi.com/api/episode/42',
  'https://rickandmortyapi.com/api/episode/43',
  'https://rickandmortyapi.com/api/episode/44',
  'https://rickandmortyapi.com/api/episode/45',
  'https://rickandmortyapi.com/api/episode/46',
  'https://rickandmortyapi.com/api/episode/47',
  'https://rickandmortyapi.com/api/episode/48',
  'https://rickandmortyapi.com/api/episode/49',
  'https://rickandmortyapi.com/api/episode/50',
  'https://rickandmortyapi.com/api/episode/51',
];

const mockEpisodesTotal = [
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 26, 29, 30,
  31, 32, 33, 35, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
];
