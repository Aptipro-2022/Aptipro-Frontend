import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acclogin',
  templateUrl: './acclogin.component.html',
  styleUrls: ['./acclogin.component.css']
})
export class AccloginComponent implements OnInit {

  public signupform:boolean = true;
  public details = { phone :''};
  constructor(private router : Router, private loginservice : LoginserviceService ) { }

  ngOnInit(): void {
  }

  signup()
  {
    this.signupform = true;
  }

  signin()
  {
    this.signupform = false;
  }

  createAcc()
  {
    console.log(this.details);
  }

  proceed() {
    //this.router.navigate(['/login-form']);
    console.log(this.details);
    this.loginservice.getdetails(this.details);
  }
}
