import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FullCalendarModule } from 'ng-fullcalendar';

import { environment } from '../../environments/environment';
import { UIModule } from '../ui/ui.module';
import { LayoutModule } from '../layout/layout.module';
import { BasePageComponent } from './base-page';

import { PageDashboardComponent } from './dashboards/dashboard-1';
import { PageContractorComponent } from './cocis/contractor';
import { PagePaymentsComponent } from './cocis/payments';
import { PageLiftingsOperationsComponent } from './cocis/liftingoperations';
import { PageDepartmentsComponent } from './cocis/departments';
import { Page404Component } from './page-404';
import { PageContractorProfileComponent } from './cocis/contractor-profile';
import { PageUserProfileComponent } from './apps/service-pages/user-profile';
import { PageEditAccountComponent } from './apps/service-pages/edit-account';
import { PageSignInComponent } from './apps/sessions/sign-in';
import { PageSignUpComponent } from './apps/sessions/sign-up';
import { FileuploadsComponent } from './fileuploads/fileuploads.component';
import { PageSearchTableComponent } from './cocis/search-table';
// import { TesterComponent } from './tester/tester.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import {
  GridModule,
  PagerModule,
  PageService,
  SortService,
  FilterService,
  GroupService,
  EditService,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
// import { ProductDataService } from './tester/product-data.service';
// import {DateRangePickerModule} from '@syncfusion/ej2-angular-calendars'
import { BrowserModule } from '@angular/platform-browser';
import { InlineEditComponent } from './cocis/inline-edit/inline-edit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    GridModule,
    PagerModule,
    // InMemoryWebApiModule.forRoot(ProductDataService),

    ChartsModule,
    NgxChartsModule,
    NgxEchartsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapApiKey
    }),
    LeafletModule,
    FullCalendarModule,

    UIModule,
    LayoutModule
  ],
  declarations: [
    BasePageComponent,
    PageDashboardComponent,
    
    PageContractorComponent,
    
    PagePaymentsComponent,
    PageLiftingsOperationsComponent,
    PageDepartmentsComponent,
    Page404Component,
    PageContractorProfileComponent,
    
    PageUserProfileComponent,
    PageEditAccountComponent,
    PageSignInComponent,
    PageSignUpComponent,
    FileuploadsComponent,
    PageSearchTableComponent,
    InlineEditComponent,
    // TesterComponent,
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    EditService,
    ToolbarService,
  ],
  exports: [ ],
  entryComponents: [ ]
})
export class PagesModule {}