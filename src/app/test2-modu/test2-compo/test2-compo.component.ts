/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2-compo.component.html',
  styleUrl: './test2-compo.component.css'
})
export class Test2CompoComponent {

}
*/

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';
import { Observable, merge  } from 'rxjs';




export interface TableData {
  /*id: string;
  progress: string;
  fruit: string;
  */
  nroAsiento: number;
  fecha: string;
  fechaExtracto: string;
  concepto: string; 
  nroDoc: number;
  debe: number;
  haber: number;
  saldo: number;
  cc: number;
}



/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'custom-table',
  styleUrls: ['./test2-compo.component.css'],
  templateUrl: './test2-compo.component.html',
})
export class Test2CompoComponent implements AfterViewInit { // TableOverviewExample


  form:FormGroup = new FormGroup({
    /*
    id: new FormControl(false),
    description: new FormControl(false)
    */
    nroAsiento: new FormControl(false),
    fecha: new FormControl(false),
    fechaExtracto: new FormControl(false),
    concepto: new FormControl(false),
    nroDoc: new FormControl(false),
    debe: new FormControl(false),
    haber: new FormControl(false),
    saldo: new FormControl(false),
    cc: new FormControl(false),
  });
  
    nroAsiento = this.form.get('nroAsiento');
    fecha = this.form.get('fecha');
    fechaExtracto = this.form.get('fechaExtracto');
    concepto = this.form.get('concepto');
    nroDoc = this.form.get('nroDoc');
    debe = this.form.get('debe');
    haber = this.form.get('haber');
    saldo = this.form.get('saldo');
    cc = this.form.get('cc');

    
    
    
  columnDefinitions = [
    { def: 'nroAsiento', label: 'NroAsiento', hide: this.nroAsiento!.value},
    { def: 'fecha', label: 'Fecha', hide: this.fecha!.value},
    { def: 'fechaExtracto', label: 'FechaExtracto', hide: this.fechaExtracto!.value},
    { def: 'concepto', label: 'Concepto', hide: this.concepto!.value},
    { def: 'nroDoc', label: 'NroDoc', hide: this.nroDoc!.value},
    { def: 'debe', label: 'Debe', hide: this.debe!.value},
    { def: 'haber', label: 'Haber', hide: this.haber!.value},
    { def: 'saldo', label: 'Saldo', hide: this.saldo!.value},
    { def: 'cc', label: 'Cc', hide: this.cc!.value},
    
  ]



  getDisplayedColumns():string[] {
    return this.columnDefinitions.filter(cd=>!cd.hide).map(cd=>cd.def);
  }
  
  dataSource: MatTableDataSource<TableData>;
  ngAfterViewInit() {
    // see to undestand
    // https://stackblitz.com/edit/angular-material-table-hide-columns-jgcnsg?file=src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.ts
   let o1:Observable<boolean> = this.nroAsiento!.valueChanges;
   let o2:Observable<boolean> = this.fecha!.valueChanges;
   let o3:Observable<boolean> = this.fechaExtracto!.valueChanges;
   let o4:Observable<boolean> = this.concepto!.valueChanges;
   let o5:Observable<boolean> = this.nroDoc!.valueChanges;
   let o6:Observable<boolean> = this.debe!.valueChanges;
   let o7:Observable<boolean> = this.haber!.valueChanges;
   let o8:Observable<boolean> = this.saldo!.valueChanges;
   let o9:Observable<boolean> = this.cc!.valueChanges;
   
//

   merge(o1, o2,o3,o4,o5,o6,o7,o8,o9).subscribe( v=>{
   this.columnDefinitions[0].hide = this.nroAsiento!.value;
   this.columnDefinitions[1].hide = this.fec!.value;
   this.columnDefinitions[1].hide = this.description.value;  
      console.log(this.columnDefinitions);
    });
  }

  





  // Whether the number of selected elements matches the total number of rows. 
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    console.log("selected...");
    

    return numSelected == numRows;

  }

  // Selects all rows if they are not all selected; otherwise clear selection. 
  toggleAllRows() {
    
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));


  }

  


  

  displayedColumns: string[] = ['select','nroAsiento', 'fecha', 'fechaExtracto', 'concepto', 'nroDoc','debe', 'haber', 'saldo', 'cc']; //, 'fruit' 
  dataSource: MatTableDataSource<TableData>;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  selection: SelectionModel<TableData>;

  constructor() {

    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    const initialSelection: TableData[] | undefined = []; // 0
    const allowMultiSelect = true;

    this.selection = new SelectionModel<TableData>(allowMultiSelect, initialSelection);
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

function generateRandomDate(from:Date, to:Date) {
  return new Date(
    from.getTime() +
      Math.random() * (to.getTime() - from.getTime()),
  );
}

// Builds and returns a new User. 
function createNewUser(id: number): TableData {
  
    /* +' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';
    */

    const deb:number = Math.trunc(Math.random() * 10000)
    const hab:number =  Math.trunc(Math.random() * 10000)
    
  return {
    /*id: id.toString(),    
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    */

    nroAsiento: Math.floor(Math.random() * 90000) + 1000,
    fecha: generateRandomDate(new Date(2020,1,1), new Date(2022,1,1)).toISOString().substring(0,10),
    fechaExtracto: generateRandomDate(new Date(2022,1,1), new Date(2024,1,1)).toISOString().substring(0,10),
    concepto: 'Concepto ' + Math.floor(Math.random() * 100) + 10,
    nroDoc: Math.trunc(Math.random() * 10000000),
    debe: Math.trunc(Math.random() * 10000000),
    haber: Math.trunc(Math.random() * 10000000),
    saldo: deb-hab,
    cc: 0,
  };
}

