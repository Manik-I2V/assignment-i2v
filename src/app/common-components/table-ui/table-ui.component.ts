import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-table-ui',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  templateUrl: './table-ui.component.html',
  styleUrl: './table-ui.component.scss'
})
export class TableUIComponent {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() button_icons:any[] = [];

  tableDataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  selection = new SelectionModel<any>(true, []);

  constructor() {
    this.tableDataSource.data = this.dataSource;
  }

  ngAfterViewInit() {
    this.tableDataSource.data = this.dataSource;
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sort = this.sort;
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected === numRows;
  }

  isSomeSelected() {
    return this.selection.selected.length > 0 && !this.isAllSelected();
  }

  toggleAllRows() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.tableDataSource.data.forEach(row => this.selection.select(row));
  }

  toggleRow(row: any) {
    this.selection.toggle(row);
  }
}
