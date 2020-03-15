import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // selectedHero: Hero;

  constructor(private heroService: HeroService/*, private messageService: MessageService*/) { }

  ngOnInit() {
    if (!this.heroes || !this.heroes.length) {
      this.getHeroes();
    }
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroService: Selected hero id=${hero.id}, name=${hero.name}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    // tslint:disable-next-line: max-line-length
    this.heroes.push({ name, id: this.heroService.newlyAddedId, series: {}, thumbnail: { path: 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_xlarge.jpg', extension: 'jpg' } });
    this.heroService.newlyAddedId++;
    // this.heroService.addHero({ name } as Hero)
    //   .subscribe(hero => {
    //     this.heroes.push(hero);
    //   });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    // this.heroService.deleteHero(hero).subscribe();
  }

  getImage(hero: Hero) {
    return `${hero.thumbnail.path}/standard_xlarge.jpg`;
  }
}
