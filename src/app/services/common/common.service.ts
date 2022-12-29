import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  // return an array of numbers of
  //  character's episodes
  getEpisodes(userEpisodes: string[]): number[] {
    let episodes: number[] = [];
    for (let episode of userEpisodes) {
      episodes.push(parseInt(episode.substring(40)));
    }
    return episodes;
  }

  getAmountOfSharedEpisodes(valueA: number[], valueB: number[]): number {

    const myArray: number[] = valueA.concat(valueB);
    const elementCounts: any = {};
    const result = [];
    myArray.forEach((element: number) => {
      elementCounts[element] = (elementCounts[element] || 0) + 1;
    });

    for (const prop in elementCounts) {
      if (elementCounts[prop] >= 2) {
        result.push(prop);
      }
    }
    return result.length;
  }
}
