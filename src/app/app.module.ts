import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCalculateComponent } from './form-calculate/form-calculate.component';
import {MatRadioModule} from '@angular/material/radio';
import { CalculateService } from './calculate.service';

@NgModule({
  declarations: [
    AppComponent,
    FormCalculateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,

  ],
  providers: [CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
