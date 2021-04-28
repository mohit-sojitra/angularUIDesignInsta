import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Myform: FormGroup;
  hobby: FormArray = new FormArray([]);
  constructor() {
    this.Myform = new FormGroup({
      email: new FormControl('my@gmail.com'),
      password: new FormControl(),
      hobby: this.hobby,
    });
  }

  ngOnInit(): void {
    console.log(this.Myform.controls);
    this.hobby.push(new FormControl('hello'));
    this.hobby.push(new FormControl('hello'));
    this.hobby.push(new FormControl('hello'));
    this.hobby.push(new FormControl('hello'));
    this.hobby.push(new FormControl('hello'));
    this.hobby.push(new FormControl('hello'));
    this.hobby.push(new FormControl('hello'));
  }
  onSubmit() {
    console.log(this.Myform);
  }
}
