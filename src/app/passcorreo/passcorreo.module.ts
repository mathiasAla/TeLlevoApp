import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasscorreoPageRoutingModule } from './passcorreo-routing.module';

import { PasscorreoPage } from './passcorreo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasscorreoPageRoutingModule
  ],
  declarations: [PasscorreoPage]
})
export class PasscorreoPageModule {}
