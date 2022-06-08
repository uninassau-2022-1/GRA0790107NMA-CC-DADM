import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmadoPageRoutingModule } from './confirmado-routing.module';

import { ConfirmadoPage } from './confirmado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmadoPageRoutingModule
  ],
  declarations: [ConfirmadoPage]
})
export class ConfirmadoPageModule {}
