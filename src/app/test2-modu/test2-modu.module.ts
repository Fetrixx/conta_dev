import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2CompoComponent } from './test2-compo/test2-compo.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';




@NgModule({
  declarations: [
    Test2CompoComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatChipsModule,
    
    
    
    
    
  ],
  exports: [
    Test2CompoComponent,
    
    
  ],
  
})
export class Test2ModuModule { }

/*
standalone: true,
  imports: [MatFormFieldModule,
            MatInputModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
            MatCardModule,
            MatCheckboxModule
          ],
*/ 
/*
CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    MatCheckboxModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
*/