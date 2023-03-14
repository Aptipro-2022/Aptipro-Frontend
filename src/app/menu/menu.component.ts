import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navbarOpen = false;
  showPanel = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
