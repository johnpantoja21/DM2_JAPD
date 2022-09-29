import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursosDetallePageRoutingModule } from './recursos-detalle-routing.module';

import { RecursosDetallePage } from './recursos-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecursosDetallePageRoutingModule
  ],
  declarations: [RecursosDetallePage]
})
export class RecursosDetallePageModule {}
