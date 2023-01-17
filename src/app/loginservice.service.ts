import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http : HttpClient, private router:Router) { }

  createAccount(Userdetails = {  phone : '', email:'', country:'', state:'', Zipcode:'', gcollege:'', branch:'', gfrom:'', gto:'' })
  {
    return this.http.post('http://localhost:3000/register', Userdetails, {responseType: 'text'}).subscribe(res => {
      console.log(res);
      this.router.navigate(['/acclogin']);
    })
  }

  getdetails(details = {phone : ''}) 
  {
    return this.http.post('http://localhost:3000/userdetails', details).subscribe(res => {
      if(res != null)
      {
        this.router.navigate(['/scenarios']);
      }
    })
  }
}

