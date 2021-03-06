import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { UIModule } from '../ui/ui.module';

import { BaseLayoutComponent } from './base-layout';
import { HorizontalLayoutComponent } from './horizontal';
import { VerticalLayoutComponent } from './vertical';
import { PublicLayoutComponent } from './public';

import { NavbarComponent } from './components/navbar';
import { MenuComponent } from './components/menu';
import { FooterComponent } from './components/footer';
import { LogoComponent } from './components/logo';
import { SearchComponent } from './components/search';
import { ActionsComponent } from './components/actions';
import { LoginFormComponent } from './components/login-form';
import { RegisterFormComponent } from './components/register-form';
import { NavbarSkeletonComponent } from './components/navbar-skeleton';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MalihuScrollbarModule.forRoot(),
    UIModule,
  ],
  declarations: [
    BaseLayoutComponent,
    HorizontalLayoutComponent,
    VerticalLayoutComponent,

    NavbarComponent,
    MenuComponent,
    FooterComponent,
    LogoComponent,
    SearchComponent,
    ActionsComponent,
    PublicLayoutComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavbarSkeletonComponent,
  ],
  exports: [LoginFormComponent, RegisterFormComponent],
})
export class LayoutModule {}
