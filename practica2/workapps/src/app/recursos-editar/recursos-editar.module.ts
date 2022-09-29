import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursosEditarPageRoutingModule } from './recursos-editar-routing.module';

import { RecursosEditarPage } from './recursos-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecursosEditarPageRoutingModule
  ],
  declarations: [RecursosEditarPage]
})
export class RecursosEditarPageModule {}
