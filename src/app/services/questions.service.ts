import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http : HttpClient, private router:Router) { }

  addquestion(questiondetails = { question: '', option1: '', option2: '', option3: '', option4:'', hint1:'', hint2:'', hint3:'', hint4:'', answer:''})
  {
    return this.http.post('http://localhost:3000/addquestion', questiondetails, {responseType: 'text'}).subscribe(res => {
      console.log(res);
    })
  }

  getQuestions() : Observable<any>{
    const url = environment.apiurl + 'question/getquestion';
    return this.http.get(url);
  }

}
