import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Character } from 'src/app/model/character';
import { DataService } from 'src/app/services/data-handle/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    name: '',
    gender: '',
    locate: '',
    img: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.data.characIdCreated++;
    let newCharacter = {
      id: this.data.characIdCreated + this.data.charactId,
      name: this.checkoutForm.value.name,
      gender: this.checkoutForm.value.gender,
      status: 'unknown',
      species: 'Humanoid',
      type: 'Fish-Person',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: this.checkoutForm.value.locate,
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: this.checkoutForm.value.img,
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/22',
      ],
      created: '2017-11-04T22:39:48.055Z',
    };

    this.data.charactersAdded.push(newCharacter);
    this.checkoutForm.reset();
    for (let charac of this.data.charactersAdded) {
      this.data.characters.push(charac);
    }
    this.data.actualList.next('character');
    this.data.locations = [];
    this.data.episodes = [];
    this.data.characters = [];
    this.data.getData();
    this.route.navigate(['']);
  }

  goHome(): void {
    // enable buttons toolbar
    this.data.disableButtonsToolbar.next(false);
    this.route.navigate(['']);
  }
}
