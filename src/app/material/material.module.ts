import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  exports: [
    MatCardModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
