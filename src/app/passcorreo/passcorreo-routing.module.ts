import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasscorreoPage } from './passcorreo.page';

const routes: Routes = [
  {
    path: '',
    component: PasscorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasscorreoPageRoutingModule {}
