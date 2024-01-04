import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { CardViewHorizontalComponent } from './components/card-view-horizontal/card-view-horizontal.component';


@NgModule({
  declarations: [
    HeaderNavComponent,
    CardViewComponent,
    CardViewHorizontalComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    HeaderNavComponent,
    CardViewComponent,
    CardViewHorizontalComponent
  ]
})
export class LayoutModule { }
