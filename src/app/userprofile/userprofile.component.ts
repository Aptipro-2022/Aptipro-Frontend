import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserdetails } from '../redux/selectors/user-details.selector';
import { selectUserPhone } from '../redux/selectors/user-phone.selector';
import { UserDetailsState } from '../redux/state/user-details';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  phone!: string;

  userdetails! : UserDetailsState;
  constructor(private store : Store) { }

  ngOnInit(): void {

    this.store.select(selectUserPhone).subscribe(phone => {
      this.phone = phone;
    });

    this.store.select(selectUserdetails).subscribe(res => {
      this.userdetails = res;
    })
  }

}
