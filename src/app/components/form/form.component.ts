import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  hide = true;
  title = 'Login Page';
  key:string = '';
  token:any = [];
  constructor() { }

  ngOnInit(): void {
  }
  getData(mail, pass)
  {
    // console.log(mail);
    // console.log(pass);
    // this.token = data;
    this.token = [mail, pass];
    console.log(this.token);
    this.key = mail + pass + "Airtel";
    localStorage.setItem(this.key, this.token);
  }
}
