import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertyComponentComponent } from './component/property-component/property-component.component';

const routes: Routes = [
  { path: 'property-component', component: PropertyComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
