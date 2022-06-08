import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBoxComponent } from './modules/search-box/search-box.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/search-box/search-box-routing.module').then(
        (Mod) => Mod.SearchBoxRoutingModule
      ),
  },
  {
    path: 'items',
    component: SearchBoxComponent,
    loadChildren: () =>
      import('./modules/search-result/search-result-routing.module').then(
        (Mod) => Mod.SearchResultRoutingModule
      ),
  },
  {
    path: 'items/:id',
    component: SearchBoxComponent,
    loadChildren: () =>
      import('./modules/product-detail/product-detail-routing.module').then(
        (Mod) => Mod.ProductDetailRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
