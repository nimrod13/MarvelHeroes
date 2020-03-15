import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    if (!this.heroes || !this.heroes.length) {
      this.getHeroes();
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = this.getRandomHeroes(heroes));
  }

  getRandomHeroes(heroes: Hero[]) {
    return heroes.sort(() => 0.5 - Math.random()).slice(0, 4);
  }
}
