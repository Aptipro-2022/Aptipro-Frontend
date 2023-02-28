import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  loadData,
  loadDataFail,
  loadDataSuccess,
} from '../actions/user-details.action';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      mergeMap(() =>
        this.loginservice.getdetails().pipe(
          map((userdetails) => {
            localStorage.setItem(
              'mobile',
              userdetails.to.substr(3, userdetails.to.length)
            );
            return loadDataSuccess({ userdetails });
          }),
          catchError((error) => of(loadDataFail({ error })))
        )
      )
    )
  ).subscribe((res) => {
    this.router.navigate(['/verifyOtp']);
  });

  constructor(
    private actions$: Actions,
    private loginservice: LoginserviceService,
    private router: Router
  ) {}
}
