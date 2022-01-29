import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { MatGastService } from './services/mat-gast.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddMGComponent } from './components/section/addMG/add-mg/add-mg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SectionComponent,
    FooterComponent,
    AsideComponent,
    AddMGComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,AppRoutingModule,ReactiveFormsModule
  ],
  providers: [MatGastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
