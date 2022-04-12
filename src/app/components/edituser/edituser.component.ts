import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Router } from '@angular/router'; 
import { Routes, RouterModule} from '@angular/router'; 
import { UsersdataService } from '../../services/usersdata.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

export class EdituserComponent implements OnInit {
  userid: any;
  users;
  user;
  idx:any;
  title= "User Dashboard";
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.userid = params['id'];
      });
    this.users = JSON.parse(localStorage.getItem('userslist'));
    // console.log(this.users[1].id);
    for(var i=0; i<100; i++)
    {
      if(this.users[i].id == this.userid)
      {
        this.user = this.users[i];
        this.idx = i;
        break;
      }
    }
    console.log(this.user);
  }
  ngOnInit(): void {
    
  }
  getData(title:string, body:string)
  {
    // console.log();
    this.users[this.idx].title = title;
    this.users[this.idx].body = body;
    localStorage.setItem('userslist', JSON.stringify(this.users));
    this.router.navigate(['/tabs']);
  }
}

