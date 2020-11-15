import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BasePageComponent } from '../../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../interfaces/app-state';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-inline-edit',

  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
})
export class InlineEditComponent
  extends BasePageComponent
  implements OnInit, OnDestroy {
  public pageSettings: PageSettingsModel = { pageSize: 4 };
  public data: object[] = [
    {
      OrderID: 10248,
      CustomerID: 'VINET',
      EmployeeID: 5,
      OrderDate: new Date(8364186e5),
      ShipName: 'Vins et alcools Chevalier',
      ShipCity: 'Reims',
      ShipAddress: '59 rue de l Abbaye',
      ShipRegion: 'CJ',
      ShipPostalCode: '51100',
      ShipCountry: 'France',
      Freight: 32.38,
      Verified: !0,
    },
    {
      OrderID: 10249,
      CustomerID: 'TOMSP',
      EmployeeID: 6,
      OrderDate: new Date(836505e6),
      ShipName: 'Toms Spezialitäten',
      ShipCity: 'Münster',
      ShipAddress: 'Luisenstr. 48',
      ShipRegion: 'CJ',
      ShipPostalCode: '44087',
      ShipCountry: 'Germany',
      Freight: 11.61,
      Verified: !1,
    },
    {
      OrderID: 10250,
      CustomerID: 'HANAR',
      EmployeeID: 4,
      OrderDate: new Date(8367642e5),
      ShipName: 'Hanari Carnes',
      ShipCity: 'Rio de Janeiro',
      ShipAddress: 'Rua do Paço, 67',
      ShipRegion: 'RJ',
      ShipPostalCode: '05454-876',
      ShipCountry: 'Brazil',
      Freight: 65.83,
      Verified: !0,
    },
    {
      OrderID: 10251,
      CustomerID: 'VICTE',
      EmployeeID: 3,
      OrderDate: new Date(8367642e5),
      ShipName: 'Victuailles en stock',
      ShipCity: 'Lyon',
      ShipAddress: '2, rue du Commerce',
      ShipRegion: 'CJ',
      ShipPostalCode: '69004',
      ShipCountry: 'France',
      Freight: 41.34,
      Verified: !0,
    },
    {
      OrderID: 10252,
      CustomerID: 'SUPRD',
      EmployeeID: 4,
      OrderDate: new Date(8368506e5),
      ShipName: 'Suprêmes délices',
      ShipCity: 'Charleroi',
      ShipAddress: 'Boulevard Tirou, 255',
      ShipRegion: 'CJ',
      ShipPostalCode: 'B-6000',
      ShipCountry: 'Belgium',
      Freight: 51.3,
      Verified: !0,
    },
    {
      OrderID: 10253,
      CustomerID: 'HANAR',
      EmployeeID: 3,
      OrderDate: new Date(836937e6),
      ShipName: 'Hanari Carnes',
      ShipCity: 'Rio de Janeiro',
      ShipAddress: 'Rua do Paço, 67',
      ShipRegion: 'RJ',
      ShipPostalCode: '05454-876',
      ShipCountry: 'Brazil',
      Freight: 58.17,
      Verified: !0,
    },
    {
      OrderID: 10254,
      CustomerID: 'CHOPS',
      EmployeeID: 5,
      OrderDate: new Date(8370234e5),
      ShipName: 'Chop-suey Chinese',
      ShipCity: 'Bern',
      ShipAddress: 'Hauptstr. 31',
      ShipRegion: 'CJ',
      ShipPostalCode: '3012',
      ShipCountry: 'Switzerland',
      Freight: 22.98,
      Verified: !1,
    },
  ];
  constructor(store: Store<IAppState>, httpSv: HttpService) {
    super(store, httpSv);
    this.pageData = {
      title: 'Inline Edit',
      loaded: true,
      breadcrumbs: [
        {
          title: 'COCIS',
          route: 'default-dashboard',
        },

        {
          title: 'Inline-Edit',
        },
      ],
    };
  }

  ngOnInit() {
    super.ngOnInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
