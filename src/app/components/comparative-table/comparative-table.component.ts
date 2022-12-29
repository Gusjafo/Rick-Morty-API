import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-handle/data.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-comparative-table',
  templateUrl: './comparative-table.component.html',
  styleUrls: ['./comparative-table.component.css'],
})
export class ComparativeTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'gender',
    'location',
    'species',
    'status',
    'shared',
    'img'
  ];
  dataSource: any[];

  constructor(
    private data: DataService,
    private route: Router,
    private common: CommonService
  ) {
    this.dataSource = this.data.characToCompare;
    this.calculateSharedEpisodesBetweenCharacters();
  }

  ngOnInit(): void {}

  goHome(): void {
    // enable buttons toolbar
    this.data.disableButtonsToolbar.next(false);
    // clean compare list
    this.data.characToCompare = [];
    this.data.charactersList = 0;
    this.data.fullCharactersList.next(false);
    this.route.navigate(['']);
  }

  calculateSharedEpisodesBetweenCharacters() {
    // get amount of episodes by character
    let episodesCharacterA:number[] = this.common.getEpisodes(
      this.dataSource[0].episode
    );
    let episodesCharacterB:number[] = this.common.getEpisodes(
      this.dataSource[1].episode
    );
    let episodesCharacterC:number[] = this.common.getEpisodes(
      this.dataSource[2].episode
    );

    // compare A-B, A-C, B-C
    let sharedAB:number = this.common.getAmountOfSharedEpisodes(episodesCharacterA,episodesCharacterB)
    let sharedAC:number = this.common.getAmountOfSharedEpisodes(episodesCharacterA,episodesCharacterC)
    let sharedBC:number = this.common.getAmountOfSharedEpisodes(episodesCharacterB,episodesCharacterC)


    this.dataSource[0] = {
      ...this.dataSource[0],
      shared: sharedAB + 
        ' with ' +
        this.data.characToCompare[1].name +
        ' / ' + sharedAC +
        ' with ' +
        this.data.characToCompare[2].name,
    };

    this.dataSource[1] = {
      ...this.dataSource[1],
      shared:sharedAB + 
        ' with ' +
        this.data.characToCompare[0].name +
        ' / ' + sharedBC +
        ' with ' +
        this.data.characToCompare[2].name,
    };

    this.dataSource[2] = {
      ...this.dataSource[2],
      shared: sharedAC +
        ' with ' +
        this.data.characToCompare[0].name +
        ' / ' + sharedBC +
        ' with ' +
        this.data.characToCompare[1].name,
    };
  }
}
