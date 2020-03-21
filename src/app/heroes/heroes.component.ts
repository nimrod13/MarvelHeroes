import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  @ViewChild('heroesContainer') heroesContainer: ElementRef;
  public isTop = true;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    this.isTop = window.pageYOffset <= window.innerHeight / 2;
  }

  constructor(public heroService: HeroService/*, private messageService: MessageService*/) { }

  ngOnInit() {
    if (!this.heroService.tryGetHeroesFromLocalStorage()) {
      this.getHeroes();
    }
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroService: Selected hero id=${hero.id}, name=${hero.name}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroService.addHeroesToLocalStorage(heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    const heroesLocal = this.heroService.heroesLocal;
    heroesLocal && heroesLocal.push({
      name, id: heroesLocal[heroesLocal.length - 1].id + 1, series: {}, stories: {},
      thumbnail: { path: 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available', extension: 'jpg' }
    });
    this.heroService.addHeroesToLocalStorage(heroesLocal);
    this.scrollToBottom();
  }

  delete(hero: Hero): void {
    let heroesLocal = this.heroService.tryGetHeroesFromLocalStorage();
    heroesLocal = heroesLocal.filter((h: Hero) => h.id !== hero.id);
    this.heroService.addHeroesToLocalStorage(heroesLocal);
  }

  private scrollToBottom(): void {
    window.scroll({
      top: this.heroesContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });

    this.isTop = false;
  }

  public scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    this.isTop = true;
  }

  public toggleScroll() {
    this.isTop ? this.scrollToBottom() : this.scrollToTop();
  }
}
