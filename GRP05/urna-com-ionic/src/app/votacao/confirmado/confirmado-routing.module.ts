import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmadoPage } from './confirmado.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmadoPageRoutingModule {}
