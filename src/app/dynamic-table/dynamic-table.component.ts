import { Component, AfterViewInit, ViewChildren, QueryList, OnInit, ViewChild, Input } from '@angular/core';
import { DtPagination } from '@dynatrace/barista-components/pagination';
import { DtTableDataSource, DtSort, DtTableSearch, DtTable } from '@dynatrace/barista-components/table';
import { startWith } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})

export class DynamicTableComponent implements AfterViewInit, OnInit {
  private data: Hero[];
  @ViewChildren(DtPagination) paginationList: QueryList<DtPagination>;
  @ViewChild(DtTableSearch, { static: true })
  tableSearch: DtTableSearch;
  searchValue = '';
  emptyNameAttempt: boolean;

  // Get the viewChild to pass the sorter reference to the datasource.
  @ViewChild('sortable', { read: DtSort, static: true }) sortable: DtSort;

  @ViewChild('heroesTable') heroesTable: DtTable<any>;
  @ViewChild('pagination') pagination: DtPagination;

  // Initialize the table's data source
  public dataSource: DtTableDataSource<{
    id: number;
    name: string;
    favorite?: boolean;
  }>;

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.data = this.heroService.tryGetHeroesFromLocalStorage();
    if (!this.data) {
      this.heroService.getHeroes().subscribe(heroes => this.onGetHeroes(heroes));
    } else {
      this.dataSource = new DtTableDataSource(this.data);
    }
  }

  add(name: string): void {
    name = name.trim();

    if (!name) {
      this.emptyNameAttempt = true;
      return;
    }

    this.emptyNameAttempt = false;
    const heroesLocal = this.heroService.tryGetHeroesFromLocalStorage();
    const newId = Math.max.apply(null, heroesLocal.map(h => h.id)) + 1;
    heroesLocal && heroesLocal.push({
      name, id: newId, series: {}, stories: {}, nickname: name,
      thumbnail: { path: 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available', extension: 'jpg' }
    });
    this.heroService.addHeroesToLocalStorage(heroesLocal).subscribe(h => this.updateDataSource(h, true));
    // this.scrollToBottom();
  }

  updateDataSource(newData: Hero[], goToEnd: boolean = false) {
    this.data = newData;
    this.dataSource = new DtTableDataSource(newData);
    this.dataSource.sort = this.sortable;
    this.dataSource.search = this.tableSearch;
    this.dataSource.pagination = goToEnd ? this.paginationList.last : this.paginationList.first;

    if (goToEnd) {
      this.pagination.currentPage = this.pagination.numberOfPages;
    }
  }

  onGetHeroes(heroes: Hero[]) {
    heroes.map(h => h.nickname = h.name);
    this.data = heroes;
    this.heroService.addHeroesToLocalStorage(heroes).subscribe(h => this.updateDataSource(h));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sortable;
    this.dataSource.search = this.tableSearch;
    this.paginationChanges();
  }

  paginationChanges() {
    this.paginationList.changes.pipe(startWith(null)).subscribe(() => {
      if (this.paginationList.first) {
        this.dataSource.pagination = this.paginationList.first;
        this.dataSource.pageSize = 20;
      } else {
        this.dataSource.pagination = null;
      }
    });
  }

  deleteHero(id: number): void {
    let heroesLocal = this.heroService.tryGetHeroesFromLocalStorage();
    heroesLocal = heroesLocal.filter((h: Hero) => h.id !== id);
    this.heroService.addHeroesToLocalStorage(heroesLocal).subscribe(h => this.updateDataSource(h));
  }

  navigateToDetails(id: number) {
    this.router.navigate(['/detail/', id]);
  }
}
