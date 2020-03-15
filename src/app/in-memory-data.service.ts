import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  private marvelAPI: { ts: string, publicKey: string, privateKey: string, hash: string } = {
    ts: '1',
    publicKey: 'ce160eefcb9aebd904aebc4b26834292',
    privateKey: 'b6514e52a26973fc538d9a33f3c1bb65f17e3c28',
    hash: 'f68daa7ad9dd734af8ebffd116a2c18d'
  };
  // tslint:disable-next-line: max-line-length
  private marvelAPIURL = `http://gateway.marvel.com/v1/public/characters?ts=${this.marvelAPI.ts}&apikey=${this.marvelAPI.publicKey}&hash=${this.marvelAPI.hash}`;

  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
