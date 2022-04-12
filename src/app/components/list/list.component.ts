import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router'; 
import { UsersdataService } from '../../services/usersdata.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit{
  users;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private userdata: UsersdataService, private router: Router)
  {
      this.users = JSON.parse(localStorage.getItem('userslist'));
      this.users.paginator = this.paginator;
      // console.log(this.users);
  }
  displayedColumns: string[] = ['position', 'name', 'weight','body' ,'action'];
  title = 'User List';
  ngAfterViewInit() {
    
  }
  deleteuser(id:any)
  {
    this.users = this.users.filter(user=> user.id != id);
    localStorage.setItem('userslist', JSON.stringify(this.users));
    this.router.navigate(['/tabs']);
  }
  
}
