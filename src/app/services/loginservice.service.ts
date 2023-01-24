import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/userdetails';
import { selectUserPhone } from '../redux/selectors/user-phone.selector';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  userdetails! : UserDetails;

  phone : string = '';

  constructor(private http : HttpClient, private router:Router, private store : Store) { }

  createAccount(Userdetails = {  phone : '', email:'', country:'', state:'', Zipcode:'', gcollege:'', branch:'', gfrom:'', gto:'' })
  {
    return this.http.post('http://localhost:3000/register', Userdetails, {responseType: 'text'}).subscribe(res => {
      console.log(res);
      this.router.navigate(['/acclogin']);
    })
  }

  createNewAccount()
  {
    return this.http.post('http://localhost:3000/register', {responseType: 'text'}).subscribe(res => {
      console.log(res);
    })
  }


  getdetails() : Observable<any> {
    console.log("service hitted")
    this.store.select(selectUserPhone).subscribe(phone => {
      this.phone = phone;
    })
    return this.http.get(`http://localhost:3000/userdetails/${this.phone}`);
  }
}

