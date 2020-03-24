import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { DtToast } from '@dynatrace/barista-components/toast';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private marvelAPI: { ts: string, publicKey: string, privateKey: string, hash: string } = {
    ts: '1',
    publicKey: 'ce160eefcb9aebd904aebc4b26834292',
    privateKey: 'b6514e52a26973fc538d9a33f3c1bb65f17e3c28',
    hash: 'f68daa7ad9dd734af8ebffd116a2c18d'
  };
  // tslint:disable-next-line: max-line-length
  private marvelAPIBaseURL = 'https://gateway.marvel.com/v1/public/characters';
  private marvelAPIQueryParams = `ts=${this.marvelAPI.ts}&apikey=${this.marvelAPI.publicKey}&hash=${this.marvelAPI.hash}`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private toast: DtToast) { }

  addHeroesToLocalStorage(heroes: Hero[]) {
    heroes && localStorage.setItem('localHeroes', JSON.stringify(heroes));
    return of(heroes);
  }

  tryGetHeroesFromLocalStorage() {
    const heroes = localStorage.getItem('localHeroes');
    return heroes && heroes.length ? JSON.parse(heroes) : null;
  }

  // getHeroes(): Observable<Hero[]> {
  //   this.messageService.add('HeroService fetched heroes');
  //   return of(HEROES);
  // }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    const marvelAPIURL = `${this.marvelAPIBaseURL}?limit=100&${this.marvelAPIQueryParams}`;
    return this.http.get<any>(marvelAPIURL)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        map(res => res.data.results),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.marvelAPIBaseURL}/${id}?${this.marvelAPIQueryParams}`;
    return this.http.get<any>(url).pipe(
      tap(x => x.status === 'Ok' && x.data.results.length ?
        this.log(`fetched heroes with id="${id}"`) :
        this.log(`no heroes matching id "${id}" could be found`),
      ),
      map(res => res ? res.data.results[0] : null),
      catchError(this.handleError<Hero>(`getHero from API with id=${id}`))
    );
  }

  tryGetHeroLocally(id: number): Hero {
    const heroesLocal = this.tryGetHeroesFromLocalStorage();
    if (!heroesLocal) {
      this.getHeroes().subscribe(heroes => { this.addHeroesToLocalStorage(heroes); return this.findHeroById(id, heroes); });
      return;
    }

    return this.findHeroById(id, heroesLocal);
  }

  private findHeroById(id: number, heroes: Hero[]): Hero {
    return heroes.find(h => h.id === id);
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error && error.error ? error.error.status : error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    const url = `${this.marvelAPIBaseURL}?${this.marvelAPIQueryParams}`;
    return this.http.put(url, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  updateLocalHero(hero: Hero): void {
    const heroesLocal: [] = this.tryGetHeroesFromLocalStorage();
    if (!heroesLocal) {
      this.getHeroes().subscribe(heroes => { this.addHeroesToLocalStorage(heroesLocal); this.updateHeroName(hero, heroes); });
      return;
    }

    this.updateHeroName(hero, heroesLocal);
  }

  updateHeroName(hero: Hero, heroes: Hero[]) {
    const heroCurrent = heroes.find(h => h.id === hero.id);

    if (!heroCurrent) {
      this.toast.create('This name cannot be changed!');
      return;
    }

    if (heroCurrent.nickname === hero.nickname) {
      this.toast.create('You have not made any changes!');
      return;
    }

    heroCurrent.nickname = hero.nickname; // only first found item is changed;
    this.addHeroesToLocalStorage(heroes);
    this.toast.create('Your changes have been saved!');
    // this.heroes.forEach((element, index) => {  //to change all names
    //   if (element.name === hero.name) {
    //     this.heroes[index].name = hero.name;
    //   }
    // });
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    const url = `${this.marvelAPIBaseURL}?${this.marvelAPIQueryParams}`;
    return this.http.post<Hero>(url, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.marvelAPIBaseURL}/${id}?${this.marvelAPIQueryParams}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    const url = `${this.marvelAPIBaseURL}?nameStartsWith=${term}&${this.marvelAPIQueryParams}`;
    return this.http.get<any>(url).pipe(
      tap(x => x.status === 'Ok' && x.data.results.length ?
        this.log(`Found heroes matching "${term}"`) :
        this.log(`No heroes matching "${term}"`),
      ),
      map(res => res.data.results),
      catchError(this.handleError<Hero[]>('searchHeroes', [])),
    );
  }

  searchLocalHeroes(term: string): Observable<Hero[]> {
    const heroesLocal: Hero[] = this.tryGetHeroesFromLocalStorage();
    if (!heroesLocal) {
      return this.searchHeroes(term);
    }

    const heroesResults = heroesLocal.filter(h => h.name.toLowerCase().includes(term.toLowerCase()));
    heroesResults.length ? this.log(`Found heroes matching "${term}"`) : this.log(`no heroes matching "${term}"`);

    return of(heroesResults);
  }
}
