import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursosDetallePage } from './recursos-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: RecursosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursosDetallePageRoutingModule {}
