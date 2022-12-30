import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResourcesService } from '../resources/resources.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // full list of characters to compare
  public fullCharactersList: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public disableButtonsToolbar: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  // actual list selected on toolbar
  public actualList: BehaviorSubject<string> = new BehaviorSubject<string>(
    'character'
  );

  public page: number = 1;
  private hasMorePages: boolean = true;
  public search: string = '';
  public characters: any = [];
  public charactersAdded: any = [];
  public locations: any = [];
  public episodes: any = [];
  public characToCompare: any = [];
  public placeHolder: string = 'Search...';
  public charactersList: number = 0;
  public disableButtons: boolean = false;
  public charactId: number = 0;
  public characIdCreated: number = 0;

  constructor(private resources: ResourcesService) {
    this.getData();
  }

  // get data from API
  getData() {
    let params = `${this.actualList.value}/?page=${this.page}&name=${this.search}`;
    this.resources.getData(params).subscribe((data) => {
      this.charactId = data.info.count;
      switch (this.actualList.value) {
        case 'character':
          for (let person of data.results) {
            this.characters.push(person);
          }
          break;
        case 'location':
          this.characters = [];
          for (let location of data.results) {
            this.locations.push(location);
          }
          break;
        case 'episode':
          this.characters = [];
          for (let episode of data.results) {
            this.episodes.push(episode);
          }
          break;
        default:
          break;
      }
      if (data.info.next !== null) {
        this.hasMorePages = true;
      }
      if (data.info.next === null) {
        this.hasMorePages = false;
      }
    });
  }

  // load more data from API
  loadMore() {
    if (this.hasMorePages) {
      this.page += 1;
      this.getData();
    }
  }

  // search element of list
  doSearch() {
    this.page = 1;
    this.characters = [];
    for (let charac of this.charactersAdded) {
      this.characters.push(charac);
    }
    this.locations = [];
    this.episodes = [];
    this.getData();
  }

  // enable compare page
  compareCharacters() {
    if (this.characToCompare.length >= 3) {
      this.fullCharactersList.next(true);
    }
  }
}
