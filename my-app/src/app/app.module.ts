import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { MatGastService } from './services/mat-gast.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddMGComponent } from './components/section/addMG/add-mg/add-mg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationPromptComponent } from './material/confirmationPrompt/confirmation-prompt/confirmation-prompt.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertService } from './services/alert.services';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SectionComponent,
    FooterComponent,
    AsideComponent,
    AddMGComponent,
    ConfirmationPromptComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [MatGastService,AlertService],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmationPromptComponent
  ]
})
export class AppModule { }
