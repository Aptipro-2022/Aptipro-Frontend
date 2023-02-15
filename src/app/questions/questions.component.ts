import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectQuestions } from '../redux/selectors/questions.selector';
import { MatDialog } from '@angular/material/dialog';
import { QuestionsDialogComponent } from '../questions-dialog/questions-dialog.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit { 

  constructor(private store : Store, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.store.select(selectQuestions).subscribe(res => {
      console.log(res);
    });
  }

  openCityDialog() {
    this.dialog.open(QuestionsDialogComponent);
  }


}
