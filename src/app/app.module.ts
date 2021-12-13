import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { SocketService } from './services/socket.service';
import { LastNamePipe } from './pipes/last-name.pipe';
import { NewNamePipe } from './pipes/new-name.pipe';
import { CardComponent } from './components/card/card.component';
import { BotonesComponent } from './components/botones/botones.component';
import { CountryService } from './services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LastNamePipe,
    NewNamePipe,
    CardComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    SocketService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
