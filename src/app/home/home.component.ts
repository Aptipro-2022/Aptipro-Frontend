import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homepagehiding: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.homepagehiding = true;
    // this.router.navigate(['\login']);
  }

}
