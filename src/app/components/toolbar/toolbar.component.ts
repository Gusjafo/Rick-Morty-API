import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data-handle/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  buttonState: Observable<boolean>;
  buttonsToolbarState: Observable<boolean>;
  buttonSelected: Observable<string>;

  selectedValue: string = 'character';
  // selectedValue: string = this.data.actualList;
  disabled: boolean = true;
  disableButtons: boolean;

  constructor(private data: DataService, private route: Router) {
    this.buttonState = this.data.fullCharactersList;
    this.buttonsToolbarState = this.data.disableButtonsToolbar;
    this.buttonSelected = this.data.actualList;


    this.disableButtons = this.data.disableButtons;
    this.buttonsToolbarState.subscribe((value: boolean) => {
      this.disableButtons = value;
    });
    this.buttonState.subscribe((value: boolean) => {
      this.disabled = !value;
    });
    this.buttonSelected.subscribe((value: string) => {
      this.selectedValue = value;
    });

  }

  ngOnInit(): void {}

  onValChange(val: string) {
    this.data.characters = [];
    this.data.episodes = [];
    this.data.locations = [];
    for (let charac of this.data.charactersAdded) {
      this.data.characters.push(charac);
    }
    this.data.placeHolder = 'Search...';
    this.data.page = 1;
    this.data.search = '';
    this.data.actualList.next(val);
    this.data.characToCompare = [];
    this.data.charactersList = 0;
    this.data.fullCharactersList.next(false);
    this.data.getData();
    this.route.navigate([''])
  }

  goCompare() {
    this.data.disableButtonsToolbar.next(true);
    this.route.navigate(['/compare']);
  }

  goCreate() {
    this.route.navigate(['/create']);
  }
}
