import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((data)=>{
      // console.log(data);
      localStorage.setItem('userslist' , JSON.stringify(data));
    });
    
   }
  }
