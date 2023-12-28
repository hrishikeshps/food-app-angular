import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { CardViewComponent } from './components/card-view/card-view.component';


@NgModule({
  declarations: [
    HeaderNavComponent,
    CardViewComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    HeaderNavComponent,
    CardViewComponent
  ]
})
export class LayoutModule { }
