import { Component, OnInit } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { PokeApiService } from 'src/app/service/pokeApi.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  
  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  public getPokemons(): any{
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      });
  }

 public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any) =>{
      return !res.name.indexOf(value.toLocaleLowerCase());
    })
    this.getAllPokemons = filter;
 }
}
