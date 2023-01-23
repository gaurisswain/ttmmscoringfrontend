import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';  
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { CountdownModule } from 'ngx-countdown';
import { ScoringComponent } from './final/scoring/scoring.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './final/admin-login/admin-login.component';
import { AdminComponent } from './final/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { NgTemplateOutlet } from '@angular/common';
import { ResultsComponent } from './final/results/results.component';
import {MatIconModule} from '@angular/material/icon';

const material = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ScoringComponent,
    AdminLoginComponent,
    AdminComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    material,
    NgTemplateOutlet
  ],
  exports: [
    material,
    NgTemplateOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
