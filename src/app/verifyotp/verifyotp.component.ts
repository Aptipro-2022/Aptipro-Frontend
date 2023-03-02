import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { userOtpState } from '../redux/state/user-otp';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { selectUserPhone } from '../redux/selectors/user-phone.selector';
import { LoginserviceService } from '../services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css'],
})
export class VerifyOtpComponent implements OnInit {
  public signupform: boolean = true;
  phone : any;
  userOtp: userOtpState = { otp: '' };
  constructor(private store: Store, private Loginservice : LoginserviceService, private router : Router) {}

  ngOnInit(): void {
    this.store.pipe(select(selectUserPhone)).subscribe(res => {
      this.phone = res;
    })
  }

  proceed(userOtp: userOtpState) {
    this.Loginservice.verifyOtp(userOtp).subscribe(res => {
      if(res.status == 'pending') {
        this.router.navigate(['/scenarios'])
      }
    });
  }
}
