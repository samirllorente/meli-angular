import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    loadChildren: () =>
      import('./modules/search-result/search-result-routing.module').then(
        (Mod) => Mod.SearchResultRoutingModule
      ),
  },
  {
    path: 'items/:id',
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
