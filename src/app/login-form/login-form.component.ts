import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public Userdetails = { phone : '', email:'', country:'', state:'', Zipcode:'', gcollege:'', branch:'', gfrom:'', gto:''}
  constructor(private loginservice : LoginserviceService) { }

  ngOnInit(): void {
  }

  loginsubmit()
  {
     this.loginservice.createAccount(this.Userdetails);
  }

}
