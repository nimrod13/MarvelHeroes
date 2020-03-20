import { Component, AfterViewInit, ViewChildren, QueryList, OnInit } from '@angular/core';
import { DtPagination } from '@dynatrace/barista-components/pagination';
import { DtTableDataSource } from '@dynatrace/barista-components/table';
import { startWith } from 'rxjs/operators';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})

export class DynamicTableComponent implements AfterViewInit, OnInit {
  constructor(
    private heroService: HeroService
  ) { }

  public data;
  @ViewChildren(DtPagination) paginationList: QueryList<DtPagination>;
  public dataSource: DtTableDataSource<{
    id: number;
    name: string;
    favorite: boolean;
  }>;

  ngOnInit(): void {
    this.data = this.heroService.heroesLocal;
    this.dataSource = new DtTableDataSource(this.data);
  }

  ngAfterViewInit(): void {
    this.paginationList.changes.pipe(startWith(null)).subscribe(() => {
      if (this.paginationList.first) {
        this.dataSource.pagination = this.paginationList.first;
        this.dataSource.pageSize = 20;
      } else {
        this.dataSource.pagination = null;
      }
    });
  }

  toggleFavorite(toggledRow: any): void {
    // Modify a data clone and assign the changed state at the end
    // to notify change detection about the dataChange in an array.
    const modifiedData = [...this.data];
    for (const row of modifiedData) {
      if (row === toggledRow) {
        row.favorite = !row.favorite;
      }
    }
    this.data = modifiedData;
  }
}
