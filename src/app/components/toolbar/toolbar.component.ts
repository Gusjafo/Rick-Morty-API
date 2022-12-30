import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data-handle/data.service';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

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
  disabled: boolean = true;
  disableButtons: boolean;
  showButtons: boolean = true;
  
  screenWidth: number = 0;

  constructor(private data: DataService, private route: Router) {
    // handle button states
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
    this.onResize();
  }

  ngOnInit(): void {}

  // handle responsive toolbar
  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 950) {
      this.showButtons = false;
    } else {
      this.showButtons = true;
    }
  }

  // toogle between list (characters/location/episodes)
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
    this.route.navigate(['']);
  }

  // go compare route
  goCompare() {
    this.data.disableButtonsToolbar.next(true);
    this.route.navigate(['/compare']);
  }

  // go create route
  goCreate() {
    this.route.navigate(['/create']);
  }
}
