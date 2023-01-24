import { Component, OnInit } from '@angular/core';
import { userPhoneState } from '../redux/state/user-phone';
import { Store } from '@ngrx/store';
import { setUserPhone } from '../redux/actions/user-phone.action';
import { loadData } from '../redux/actions/user-details.action';
import { selectUserDetails } from '../redux/selectors/user-details.selector';

@Component({
  selector: 'app-acclogin',
  templateUrl: './acclogin.component.html',
  styleUrls: ['./acclogin.component.css']
})
export class AccloginComponent implements OnInit {

  public signupform:boolean = true;
  userPhone : userPhoneState = { phone:'' };
  constructor(private store : Store) { }

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
    // console.log(this.details);
  }

  proceed(userPhone : userPhoneState) {
    this.store.dispatch(setUserPhone({userPhone}));
    this.store.dispatch(loadData());
  }
}
