import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { DtPagination } from '@dynatrace/barista-components/pagination';
import { DtTableDataSource } from '@dynatrace/barista-components/table';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})

export class DynamicTableComponent implements AfterViewInit {
  show = true;
  private data: Array<{
    id: number;
    name: string;
  }> = [
      { id: 1, name: 'et-demo-2-win4' },
      // { id: 'et-demo-2-win3', name: 26 },
      // { id: 'docker-id2', name: 25.4 },
      // { id: 'et-demo-2-win1', name: 23 },
      // { id: 'et-demo-2-win8', name: 78 },
      // { id: 'et-demo-2-macOS', name: 21 },
      // { id: 'kyber-id6', name: 12.3 },
      // { id: 'dev-demo-5-macOS', name: 24 },
    ];
  @ViewChildren(DtPagination) paginationList: QueryList<DtPagination>;
  dataSource: DtTableDataSource<{
    id: number;
    name: string;
  }> = new DtTableDataSource(this.data);
  ngAfterViewInit(): void {
    this.paginationList.changes.pipe(startWith(null)).subscribe(() => {
      if (this.paginationList.first) {
        this.dataSource.pagination = this.paginationList.first;
        this.dataSource.pageSize = 2;
      } else {
        this.dataSource.pagination = null;
      }
    });
  }
}
