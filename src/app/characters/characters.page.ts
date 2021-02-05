import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import Character from '../types/character';
import CharacterResponse from '../types/character-response';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  characters: Character[] = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.http.get<CharacterResponse>(`${environment.apiUrl}character`)
      .subscribe(res => {
        this.characters = res.results;
      })
  }

}
