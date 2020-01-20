import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatTableDataSource } from '@angular/material/table';
import { Movie } from 'src/app/movie';
import { HttpClient } from '@angular/common/http';
 
interface moviesTop {
  rank: number;
  title: string;
  cash: number;
}

interface moviesOskar {
  oskar: number;
  title: string;
  cash: number;
}
 
const ELEMENT_DATA1: moviesTop[] = [
  {rank: 1, title: 'Fight Club', cash: 10079},
  {rank: 2, title: 'One Flew Over the Cuckoos Nest', cash: 40026},
  {rank: 3, title: 'The Matrix', cash: 6941},
  {rank: 4, title: 'The Silence of the Lambs', cash: 90122},
  {rank: 5, title: 'Casablanca', cash: 10811}
];

const ELEMENT_DATA2: moviesOskar[] = [
  {oskar: 1, title: 'Fight Club', cash: 10079},
  {oskar: 2, title: 'One Flew Over the Cuckoos Nest', cash: 40026},
  {oskar: 3, title: 'The Matrix', cash: 6941},
  {oskar: 4, title: 'The Silence of the Lambs', cash: 90122},
  {oskar: 5, title: 'Casablanca', cash: 10811}
];
 
@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

 
  moviesTop: MatTableDataSource<moviesTop>;
  displayedColumnsOne: string[] = ['rank', 'title', 'cash', 'action'];
  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;
 
 
  moviesOskar: MatTableDataSource<moviesOskar>;
  displayedColumnsTwo: string[] = ['oskar', 'title', 'cash', 'action'];
  @ViewChild('TableTwoPaginator', {static: true}) tableTwoPaginator: MatPaginator;
  @ViewChild('TableTwoSort', {static: true}) tableTwoSort: MatSort;
 
  constructor(private http: HttpClient) {
    this.moviesTop = new MatTableDataSource;
 
    this.moviesOskar = new MatTableDataSource;
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