import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  showNoti: boolean = false;
  event: any;
  constructor(public router: Router) {}

  ngOnInit(): void {}
  @HostListener('document:click', ['$event'])
  clickout() {
    this.showNoti = false;
  }

  clickit() {
    this.showNoti = !this.showNoti;
  }
}
