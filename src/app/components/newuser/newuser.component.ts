import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Router } from '@angular/router'; 
import { Routes, RouterModule} from '@angular/router'; 
import { UsersdataService } from '../../services/usersdata.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})

export class NewuserComponent implements OnInit {
  userid: any;
  users:any;
  user:any;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.users = JSON.parse(localStorage.getItem('userslist'));
    this.userid = this.users.length+1;
    // this.users.push(this.user);
  }
  ngOnInit(): void {
    
  }
  getData(title:string, body:string)
  {
    console.log(title, body);

    this.users.push({"userId":"10","id":this.userid,"title":title, "body":body});
    localStorage.setItem('userslist', JSON.stringify(this.users));
    this.router.navigate(['/tabs']);
  }
}

