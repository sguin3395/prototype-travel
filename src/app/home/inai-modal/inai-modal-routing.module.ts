import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InaiModalPage } from './inai-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InaiModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InaiModalPageRoutingModule {}
