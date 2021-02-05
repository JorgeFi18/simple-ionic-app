import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import Character from '../types/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  characterId: number = null;
  character: Character = null;
  characterName: string = 'Character'

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.characterId = +this.route.snapshot.paramMap.get('id')
    this.getCharacterInfo();
  }

  getCharacterInfo() {
    this.http.get<Character>(`${environment.apiUrl}character/${this.characterId}`)
      .subscribe(resp => {
        this.character = resp
        this.characterName = resp.name
      })
  }

}
