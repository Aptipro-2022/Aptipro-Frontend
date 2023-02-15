import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { loadQuestion, loadQuestionFail, loadQuestionSuccess } from '../actions/questions.action';

@Injectable()
export class QuestionEffects {
  loadQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuestion),
      mergeMap(() =>
        this.loginservice.getQuestion().pipe(
          map((questions) => loadQuestionSuccess({ questions })),
          catchError((error) => of(loadQuestionFail({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private loginservice : LoginserviceService) {
  }

}
