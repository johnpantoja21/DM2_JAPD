import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursosEditarPage } from './recursos-editar.page';

const routes: Routes = [
  {
    path: '',
    component: RecursosEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursosEditarPageRoutingModule {}
