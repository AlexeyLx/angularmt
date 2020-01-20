import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTableComponent } from './material-table/material-table.component';
import {  
  MatDialogModule,
  MatButtonModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule }   from '@angular/common/http';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MaterialTableComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,

    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
     
    HttpClientModule
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }