import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InaiModalPageRoutingModule } from './inai-modal-routing.module';

import { InaiModalPage } from './inai-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InaiModalPageRoutingModule
  ],
  declarations: [InaiModalPage]
})
export class InaiModalPageModule {}
