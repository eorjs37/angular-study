import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponentComponent } from './component/property-component/property-component.component';
import { TextBuleDirective } from './directive/text-bule.directive';
import { NgclassComponent } from './component/ngclass/ngclass.component';
import { NgifComponent } from './component/ngif/ngif.component';
import { NgforComponent } from './component/ngfor/ngfor.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { CounterComponent } from './component/counter/counter.component';
import { ChildComponent } from './component/child/child.component';
import { Child2Component } from './component/child2/child2.component';

@NgModule({
  declarations: [AppComponent, PropertyComponentComponent, TextBuleDirective, NgclassComponent, NgifComponent, NgforComponent, UserListComponent, CounterComponent, ChildComponent, Child2Component],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
