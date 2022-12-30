import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data-handle/data.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent implements OnInit {
  @Input() public user: any;
  public someEpisode: number = 1;
  buttonState: Observable<boolean> = this.data.fullCharactersList;
  buttonSte: boolean = true;

  constructor(private data: DataService, private common: CommonService) {
    this.buttonState.subscribe((value) => {
      this.buttonSte = value;
    });
  }

  ngOnInit(): void {
    if (this.user.episode != undefined) {
      // random episode of character'list episodes
      let episodes: number[] = this.common.getEpisodes(this.user.episode);
      this.someEpisode = episodes[Math.floor(Math.random() * episodes.length)];
    }
  }

  // add character to compare list
  addCharacterToCompare() {
    this.buttonSte = true;
    this.data.characToCompare.push(this.user);
    this.data.charactersList++;
    this.data.compareCharacters();
  }
}
