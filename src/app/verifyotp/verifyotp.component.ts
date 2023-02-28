import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userOtpState } from '../redux/state/user-otp';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css'],
})
export class VerifyOtpComponent implements OnInit {
  public signupform: boolean = true;
  userOtp: userOtpState = { otp: '' };
  constructor(private store: Store, private http: HttpClient) {}

  ngOnInit(): void {}

  signup() {
    this.signupform = true;
  }

  signin() {
    this.signupform = false;
  }

  createAcc() {
    // console.log(this.details);
  }

  proceed(userOtp: userOtpState) {
    console.log(userOtp);
    var url =
      environment.apiurl +
      'verify/getCode/?code=' +
      userOtp.otp +
      '&phonenumber=' +
      localStorage.getItem('mobile');
    fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        if (resp.status === 'success') {
          localStorage.removeItem('mobile');
        }
      })
      .catch((e) => console.log('error', e));
    // this.http.get(url);
  }
}
