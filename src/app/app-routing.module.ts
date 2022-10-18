import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertyComponentComponent } from './component/property-component/property-component.component';
import { NgclassComponent } from './component/ngclass/ngclass.component';
import { NgifComponent } from './component/ngif/ngif.component';
const routes: Routes = [
  { path: 'property-component', component: PropertyComponentComponent },
  { path: 'ngclass', component: NgclassComponent },
  { path: 'ngif', component: NgifComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
