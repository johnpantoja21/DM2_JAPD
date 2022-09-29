import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: 'recursos',
   //funciona como un array
   children: [
   {
   path: '',
   loadChildren: () => import('./recursos/recursos.module').then( m => m.RecursosPageModule)
   //loadChildren permiten redireccionar
   },
   {
   path: 'recursos-detalle/:recursosId',
   loadChildren: () => import('./recursos-detalle/recursos-detalle.module').then( m => m.RecursosDetallePageModule)
   },
   {
   //los dos puntos permiten realizar un traspaso de valores por parametros
   path: 'recursos-editar/:recursosId',
   loadChildren: () => import('./recursos-editar/recursos-editar.module').then( m => m.RecursosEditarPageModule)
   },
  
   ]
  },
  {
   //a nivel de la ruta principal redirigimo a recursos
   path: '',
   redirectTo: 'recursos',
   pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
