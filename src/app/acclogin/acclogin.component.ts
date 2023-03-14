import { Component, OnInit, ViewChild } from '@angular/core';
import { userPhoneState } from '../redux/state/user-phone';
import { Store } from '@ngrx/store';
import { setUserPhone } from '../redux/actions/user-phone.action';
import { loadData } from '../redux/actions/user-details.action';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-acclogin',
  templateUrl: './acclogin.component.html',
  styleUrls: ['./acclogin.component.css']
})
export class AccloginComponent implements OnInit {

  showFiller = false;
  step = 1;
  login = { email: null, password: null };
  createAccountModal = { email: null, phoneNumber: null };
  otpFormModal = { emailOtp: null, phoneNumberOtp: null };
  public signupform: boolean = true;
  userPhone: userPhoneState = { phone: '' };
  currentStep: string = 'login';
  passwordForm!: FormGroup;

  constructor(private store: Store, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.passwordForm = this.fb.group(
      {
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      }
    );

  }

  proceed(userPhone: userPhoneState) {
    this.store.dispatch(setUserPhone({ userPhone }));
    this.store.dispatch(loadData());
    this.router.navigate(['/verifyOtp']);
  }

  signIn() {
    console.log(this.login);
  }

  createAccount(section: string) {
    this.currentStep = section;
  }

}
