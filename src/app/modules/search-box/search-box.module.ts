import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchBoxRoutingModule } from './search-box-routing.module';
import { SearchBoxComponent } from './search-box.component';


@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    SearchBoxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchBoxComponent,
  ]
})
export class SearchBoxModule { }
