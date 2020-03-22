import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    const heroesLocal = this.heroService.tryGetHeroesFromLocalStorage();

    if (heroesLocal) {
      this.heroes = this.getRandomHeroes(heroesLocal);
      this.messageService.add(`Fetched ${this.heroes.reduce((prev, hero) => `${prev.length ? prev + ', ' : ''} ${hero.name}`, '')} from local storage.`);
      return;
    }

    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = this.getRandomHeroes(heroes);
      this.heroService.addHeroesToLocalStorage(heroes);
    });
  }

  getRandomHeroes(heroes: Hero[]) {
    return heroes.sort(() => 0.5 - Math.random()).slice(0, 8);
  }
}
