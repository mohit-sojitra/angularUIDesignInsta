import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MypostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
