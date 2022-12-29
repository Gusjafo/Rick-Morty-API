import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css'],
})
export class LocationCardComponent implements OnInit {
  @Input() public user: any;
  residentsAmount: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.residentsAmount = this.user.residents.length;
  }
}
