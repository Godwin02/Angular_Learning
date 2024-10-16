import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { DesignerComponent } from './designer/designer.component';
import { StudentComponent } from './student/student.component';
import { CommonDesignComponent } from './common-design/common-design.component';
import { CommonBtnComponent } from './common-btn/common-btn.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BindingComponent } from './binding/binding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DesignerComponent,
    StudentComponent,
    CommonDesignComponent,
    CommonBtnComponent,
    BootstrapComponent,
    BindingComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
