import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponentComponent } from './component/property-component/property-component.component';
import { TextBuleDirective } from './directive/text-bule.directive';
import { NgclassComponent } from './component/ngclass/ngclass.component';
import { NgifComponent } from './component/ngif/ngif.component';

@NgModule({
  declarations: [AppComponent, PropertyComponentComponent, TextBuleDirective, NgclassComponent, NgifComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
