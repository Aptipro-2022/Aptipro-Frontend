import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadData, loadDataFail, loadDataSuccess } from '../actions/user-details.action';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      mergeMap(() =>
        this.loginservice.getdetails().pipe(
          map((userdetails) => loadDataSuccess({ userdetails })),
          catchError((error) => of(loadDataFail({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private loginservice : LoginserviceService) {
  }

}
