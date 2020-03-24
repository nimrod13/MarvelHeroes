import { Component, OnInit, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs';

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
    this.isTop = window.pageYOffset <= window.innerHeight / 3;
  }

  constructor(public heroService: HeroService) { }

  ngOnInit() {
    if (!this.heroService.tryGetHeroesFromLocalStorage()) {
      this.getHeroes();
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      heroes.map(h => h.nickname = h.name);
      this.heroService.addHeroesToLocalStorage(heroes);
    });
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
