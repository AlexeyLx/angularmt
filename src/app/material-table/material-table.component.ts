import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatTableDataSource } from '@angular/material/table';
import { Movie } from 'src/app/movie';
import { HttpClient } from '@angular/common/http';
// import { MatDialog } from './matdialog/matdialog.component';
import { MatDialog, MatTable } from '@angular/material';

interface moviesTop {
  id: number;
  rank: number;
  title: string;
  cash: number;
}

interface moviesOskar {
  id: number;
  oskar: number;
  title: string;
  cash: number;
}
 
const ELEMENT_DATA1: moviesTop[] = [
  {id: 1, rank: 1, title: 'Fight Club', cash: 10079},
  {id: 2, rank: 2, title: 'One Flew Over the Cuckoos Nest', cash: 40026},
  {id: 3, rank: 3, title: 'The Matrix', cash: 6941},
  {id: 4, rank: 4, title: 'The Silence of the Lambs', cash: 90122},
  {id: 5, rank: 5, title: 'Casablanca', cash: 10811}
];

const ELEMENT_DATA2: moviesOskar[] = [
  {id: 6, oskar: 1, title: 'Fight Club', cash: 10079},
  {id: 7, oskar: 2, title: 'One Flew Over the Cuckoos Nest', cash: 40026},
  {id: 8, oskar: 2, title: 'The Matrix', cash: 6941},
  {id: 9, oskar: 1, title: 'The Silence of the Lambs', cash: 90122},
  {id: 10, oskar: 2, title: 'Casablanca', cash: 10811}
];
 
@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  dataSource = ELEMENT_DATA1;
  moviesTop: MatTableDataSource<moviesTop>;
  displayedColumnsOne: string[] = ['rank', 'title', 'cash', 'action'];
  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;
 
 
  moviesOskar: MatTableDataSource<moviesOskar>;
  displayedColumnsTwo: string[] = ['oskar', 'title', 'cash', 'action'];
  @ViewChild('TableTwoPaginator', {static: true}) tableTwoPaginator: MatPaginator;
  @ViewChild('TableTwoSort', {static: true}) tableTwoSort: MatSort;
 
  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.moviesTop = new MatTableDataSource;
 
    this.moviesOskar = new MatTableDataSource;
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(MatDialog, {
      width: '150px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else (result.event == 'Delete');{
        this.deleteRowData(result.data);
      }
    });
  }

  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.title = row_obj.title;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

  ngOnInit() {
    this.moviesTop.data = ELEMENT_DATA1;
    this.moviesTop.paginator = this.tableOnePaginator;
    this.moviesTop.sort = this.tableOneSort;
 
    this.moviesOskar.data = ELEMENT_DATA2;
    this.moviesOskar.paginator = this.tableTwoPaginator;
    this.moviesOskar.sort = this.tableTwoSort;

  }
 
  applyFilterOne(filterValue: string) {
    this.moviesTop.filter = filterValue.trim().toLowerCase();
  }
 
  applyFilterTwo(filterValue: string) {
    this.moviesOskar.filter = filterValue.trim().toLowerCase();
  }
 
}