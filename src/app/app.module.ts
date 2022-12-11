import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
import { SingleContentProjectionComponent } from './component/single-content-projection/single-content-projection.component';
import { MultiContentProjectionComponent } from './component/multi-content-projection/multi-content-projection.component';
import { UserList2Component } from './component/user-list2/user-list2.component';
import { UserComponent } from './component/user/user.component';
import { TextcolorDirective } from './directive/textcolor.directive';
import { TextColorCustomDirective } from './directive/text-color-custom.directive';
import { MgNgIfDirective } from './directive/mg-ng-if.directive';
import { ReversePipe } from './pipe/reverse.pipe';
import { TodoComponent } from './component/todo/todo.component';
import { LimitPipe } from './pipe/limit.pipe';
import { ParentComponent } from './component/parent/parent.component';
import { ChildrenComponent } from './component/children/children.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserForm2Component } from './component/user-form2/user-form2.component';
import { FormValidateComponent } from './component/form-validate/form-validate.component';
import { FormValidate2Component } from './component/form-validate2/form-validate2.component';
import { FormValidate3Component } from './component/form-validate3/form-validate3.component';
import { FormValidate4Component } from './component/form-validate4/form-validate4.component';
import { FormArrayComponent } from './component/form-array/form-array.component';
import { FormValidate5Component } from './component/form-validate5/form-validate5.component';
import { FormCustomValidatorComponent } from './component/form-custom-validator/form-custom-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponentComponent,
    TextBuleDirective,
    NgclassComponent,
    NgifComponent,
    NgforComponent,
    UserListComponent,
    CounterComponent,
    ChildComponent,
    Child2Component,
    SingleContentProjectionComponent,
    MultiContentProjectionComponent,
    UserList2Component,
    UserComponent,
    TextcolorDirective,
    TextColorCustomDirective,
    MgNgIfDirective,
    ReversePipe,
    TodoComponent,
    LimitPipe,
    ParentComponent,
    ChildrenComponent,
    UserFormComponent,
    UserForm2Component,
    FormValidateComponent,
    FormValidate2Component,
    FormValidate3Component,
    FormValidate4Component,
    FormArrayComponent,
    FormValidate5Component,
    FormCustomValidatorComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
