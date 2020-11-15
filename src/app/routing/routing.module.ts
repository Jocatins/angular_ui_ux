import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalLayoutComponent } from '../layout/vertical';
import { HorizontalLayoutComponent } from '../layout/horizontal';
import { PublicLayoutComponent } from '../layout/public';

import { PageDashboardComponent } from '../pages/dashboards/dashboard-1';
import { PageContractorComponent } from '../pages/cocis/contractor';
import { PagePaymentsComponent } from '../pages/cocis/payments';
import { PageLiftingsOperationsComponent } from '../pages/cocis/liftingoperations';
import { PageDepartmentsComponent } from '../pages/cocis/departments';
import { Page404Component } from '../pages/page-404';
import { PageContractorProfileComponent } from '../pages/cocis/contractor-profile';
import { PageUserProfileComponent } from '../pages/apps/service-pages/user-profile';
import { PageEditAccountComponent } from '../pages/apps/service-pages/edit-account';
import { PageSignInComponent } from '../pages/apps/sessions/sign-in';
import { PageSignUpComponent } from '../pages/apps/sessions/sign-up';
import { FileuploadsComponent } from '../pages/fileuploads';
import { PageSearchTableComponent } from '../pages/cocis/search-table';
import { InlineEditComponent } from '../pages/cocis/inline-edit/inline-edit.component';

const VERTICAL_ROUTES: Routes = [
  { path: 'default-dashboard', component: PageDashboardComponent },
  { path: 'contractors', component: PageContractorComponent },
  { path: 'contractor-profile', component: PageContractorProfileComponent },
  { path: 'payments', component: PagePaymentsComponent },
  { path: 'lifting-operations', component: PageLiftingsOperationsComponent },
  { path: 'departments', component: PageDepartmentsComponent },
  { path: 'fileuploads', component: FileuploadsComponent },
  { path: 'search-table', component: PageSearchTableComponent },
  { path: 'inline-edit', component: InlineEditComponent },

  { path: 'user-profile', component: PageUserProfileComponent },
  { path: 'edit-account', component: PageEditAccountComponent },

  { path: '**', component: Page404Component },
];

const PUBLIC_ROUTES: Routes = [
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'sign-up', component: PageSignUpComponent },
];

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/vertical/default-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'vertical',
    component: VerticalLayoutComponent,
    children: VERTICAL_ROUTES,
  },
  {
    path: 'horizontal',
    component: HorizontalLayoutComponent,
    children: VERTICAL_ROUTES,
  },
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: PUBLIC_ROUTES,
  },
  {
    path: '**',
    component: VerticalLayoutComponent,
    children: VERTICAL_ROUTES,
  },
];

@NgModule({
  imports: [],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
