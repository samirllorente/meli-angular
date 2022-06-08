import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchBoxRoutingModule } from './search-box-routing.module';
import { SearchBoxComponent } from './search-box.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    SearchBoxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    SearchBoxComponent,
  ]
})
export class SearchBoxModule { }
