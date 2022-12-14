import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertyComponentComponent } from './component/property-component/property-component.component';
import { NgclassComponent } from './component/ngclass/ngclass.component';
import { NgifComponent } from './component/ngif/ngif.component';
import { NgforComponent } from './component/ngfor/ngfor.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { CounterComponent } from './component/counter/counter.component';
import { ParentComponent } from './component/parent/parent.component';
const routes: Routes = [
  { path: 'property-component', component: PropertyComponentComponent },
  { path: 'ngclass', component: NgclassComponent },
  { path: 'ngif', component: NgifComponent },
  { path: 'ngfor', component: NgforComponent },
  { path: 'userListComponent', component: UserListComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'parent', component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
