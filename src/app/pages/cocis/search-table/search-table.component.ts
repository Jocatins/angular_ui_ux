import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../base-page';
import { IAppState } from '../../../interfaces/app-state';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'page-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss'],
})
export class PageSearchTableComponent
  extends BasePageComponent
  implements OnInit, OnDestroy {
  tableData: any[];

  constructor(store: Store<IAppState>, httpSv: HttpService) {
    super(store, httpSv);

    this.pageData = {
      title: 'Search tables',
      loaded: true,
      breadcrumbs: [
        {
          title: 'COCIS',
          route: 'default-dashboard',
        },

        {
          title: 'Search-table',
        },
      ],
    };
    this.tableData = [];
  }

  ngOnInit() {
    super.ngOnInit();

    this.getData('assets/data/table-sorting.json', 'tableData');
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
