import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css'],
})
export class EpisodeCardComponent implements OnInit {
  @Input() public user: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  moreInfo() {
    this.dialog.open(DialogElements, { data: this.user });
  }
}

@Component({
  selector: 'dialog-elements',
  templateUrl: './dialog-elements.html',
})
export class DialogElements {
  totalCharacteres: number = 0
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
this.totalCharacteres = data.characters.length
  }
}
