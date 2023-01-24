import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-questions-admin',
  templateUrl: './questions-admin.component.html',
  styleUrls: ['./questions-admin.component.css']
})
export class QuestionsAdminComponent implements OnInit {

  constructor(private questionservice : QuestionsService) { }

  public questiondetails = { question: '', option1: '', option2: '', option3: '', option4:'', hint1:'', hint2:'', hint3:'', hint4:'', answer:''};
  addForm!: FormGroup;
  ngOnInit(): void {
  }

  addquestion() {
    console.log(this.questiondetails);
    this.questionservice.addquestion(this.questiondetails);
  }

}
