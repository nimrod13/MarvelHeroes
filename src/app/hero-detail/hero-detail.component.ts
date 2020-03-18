import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    if (!this.hero) {
      this.getHero();
    }
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = this.heroService.tryGetHeroLocally(id) || null;

    if (!this.hero) {
      this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateLocalHero(this.hero);
    // this.heroService.updateHero(this.hero)
    //   .subscribe(() => this.goBack());
  }

  setFallbackImg(event) {
    event.target.src = 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_xlarge.jpg';
  }

  getImageSrc() {
    return `${this.hero.thumbnail.path}/landscape_xlarge.jpg`;
  }

  getImageSrcSet() {
    const path = this.hero.thumbnail.path;
    return `${path}/landscape_small.jpg 120w, ${path}/landscape_medium.jpg 175w, ${path}/landscape_large.jpg 190w, ${path}/landscape_xlarge.jpg 270w`;
  }

  getSeriesItems(hero: Hero) {
    return hero.series.available > 0 ? hero.series.items : null;
  }
}
