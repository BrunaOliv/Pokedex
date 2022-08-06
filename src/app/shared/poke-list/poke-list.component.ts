import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/pokeApi.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.pokeApiService.apiListAllPokemons.subscribe(res => console.log(res));
  }

}
