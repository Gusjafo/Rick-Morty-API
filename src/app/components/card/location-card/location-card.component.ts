import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/model/location';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css'],
})
export class LocationCardComponent implements OnInit {
  @Input() public user!: Location;
  residentsAmount: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.residentsAmount = this.user.residents.length;
  }
}
